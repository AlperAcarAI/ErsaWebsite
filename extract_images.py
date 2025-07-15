#!/usr/bin/env python3

import PyPDF2
import os
from PIL import Image
import io

def extract_images_from_pdf(pdf_path):
    """Extract images from PDF file"""
    print(f"Extracting images from: {pdf_path}")
    
    # Create output directory
    output_dir = "extracted_images"
    os.makedirs(output_dir, exist_ok=True)
    
    # Open PDF file
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        
        print(f"PDF has {len(pdf_reader.pages)} pages")
        
        image_count = 0
        
        # Go through each page
        for page_num, page in enumerate(pdf_reader.pages):
            print(f"Processing page {page_num + 1}")
            
            # Check if page has images
            if '/XObject' in page['/Resources']:
                xObjects = page['/Resources']['/XObject'].get_object()
                
                for obj_name in xObjects:
                    obj = xObjects[obj_name]
                    
                    if obj.get('/Subtype') == '/Image':
                        try:
                            # Extract image data
                            data = obj.get_data()
                            
                            # Get image properties
                            width = obj.get('/Width')
                            height = obj.get('/Height')
                            
                            print(f"Found image: {obj_name} ({width}x{height})")
                            
                            # Save image
                            safe_obj_name = obj_name.replace('/', '_')
                            image_filename = f"{output_dir}/image_{page_num}_{safe_obj_name}_{image_count}.png"
                            
                            # Try to create PIL image
                            try:
                                image = Image.open(io.BytesIO(data))
                                image.save(image_filename, "PNG")
                                print(f"Saved: {image_filename}")
                                image_count += 1
                            except Exception as e:
                                print(f"Error saving image {obj_name}: {e}")
                                # Try to save raw data
                                raw_filename = f"{output_dir}/raw_{page_num}_{safe_obj_name}_{image_count}.raw"
                                with open(raw_filename, 'wb') as raw_file:
                                    raw_file.write(data)
                                print(f"Saved raw data: {raw_filename}")
                                image_count += 1
                                
                        except Exception as e:
                            print(f"Error processing image {obj_name}: {e}")
    
    print(f"Total images extracted: {image_count}")
    return image_count

if __name__ == "__main__":
    pdf_path = "attached_assets/ErsaUlasim-Katalog-V2_1752317766979.pdf"
    extract_images_from_pdf(pdf_path)