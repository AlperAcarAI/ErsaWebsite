import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { getEmailService } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Complaint form submission endpoint
  app.post("/api/send-complaint", async (req, res) => {
    try {
      const { name, email, phone, company, formType, priority, subject, message } = req.body;

      // Validate required fields
      if (!name || !email || !formType || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "Ad, e-posta, form türü, konu ve mesaj alanları zorunludur." 
        });
      }

      const emailService = getEmailService();
      
      // Test email connection first
      const isConnected = await emailService.testConnection();
      if (!isConnected) {
        return res.status(500).json({ 
          success: false, 
          error: "E-posta servisi yapılandırılmamış. Lütfen yönetici ile iletişime geçin." 
        });
      }

      // Send email
      const success = await emailService.sendComplaintForm({
        name,
        email,
        phone,
        company,
        formType,
        priority,
        subject,
        message
      });

      if (success) {
        res.json({ success: true, message: "Form başarıyla gönderildi." });
      } else {
        res.status(500).json({ 
          success: false, 
          error: "E-posta gönderilirken bir hata oluştu." 
        });
      }
    } catch (error) {
      console.error("Complaint form error:", error);
      res.status(500).json({ 
        success: false, 
        error: "Sunucu hatası oluştu." 
      });
    }
  });

  // Test email configuration endpoint
  app.get("/api/test-email", async (req, res) => {
    try {
      const emailService = getEmailService();
      const isConnected = await emailService.testConnection();
      
      res.json({ 
        success: isConnected, 
        message: isConnected ? "E-posta servisi çalışıyor." : "E-posta servisi yapılandırılmamış." 
      });
    } catch (error) {
      console.error("Email test error:", error);
      res.status(500).json({ 
        success: false, 
        error: "E-posta testi başarısız." 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
