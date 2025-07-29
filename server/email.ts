import nodemailer from 'nodemailer';

interface EmailConfig {
  gmail: string;
  appPassword: string;
}

interface ComplaintFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  formType: string;
  priority: string;
  subject: string;
  message: string;
}

export class EmailService {
  private transporter: nodemailer.Transporter | null = null;

  constructor(private config?: EmailConfig) {
    if (config) {
      this.setupTransporter();
    }
  }

  private setupTransporter() {
    if (!this.config) return;

    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: this.config.gmail,
        pass: this.config.appPassword
      }
    });
  }

  async sendComplaintForm(formData: ComplaintFormData): Promise<boolean> {
    if (!this.transporter || !this.config) {
      throw new Error('Email service not configured');
    }

    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background-color: #1e40af; color: white; padding: 20px; border-radius: 8px 8px 0 0;">
          <h2 style="margin: 0;">ERSA Ulaşım - ${formData.formType}</h2>
          <p style="margin: 5px 0 0 0; opacity: 0.9;">Yeni form başvurusu alındı</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border: 1px solid #e2e8f0;">
          <h3 style="color: #1e40af; margin-top: 0;">Başvuru Detayları</h3>
          
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; width: 150px;">Ad Soyad:</td>
              <td style="padding: 8px;">${formData.name}</td>
            </tr>
            <tr style="background-color: white;">
              <td style="padding: 8px; font-weight: bold;">E-posta:</td>
              <td style="padding: 8px;">${formData.email}</td>
            </tr>
            ${formData.phone ? `
            <tr>
              <td style="padding: 8px; font-weight: bold;">Telefon:</td>
              <td style="padding: 8px;">${formData.phone}</td>
            </tr>
            ` : ''}
            ${formData.company ? `
            <tr style="background-color: white;">
              <td style="padding: 8px; font-weight: bold;">Şirket:</td>
              <td style="padding: 8px;">${formData.company}</td>
            </tr>
            ` : ''}
            <tr${formData.company ? '' : ' style="background-color: white;"'}>
              <td style="padding: 8px; font-weight: bold;">Form Türü:</td>
              <td style="padding: 8px;">${formData.formType}</td>
            </tr>
            <tr${formData.company ? ' style="background-color: white;"' : ''}>
              <td style="padding: 8px; font-weight: bold;">Öncelik:</td>
              <td style="padding: 8px;">${formData.priority}</td>
            </tr>
            <tr${formData.company ? '' : ' style="background-color: white;"'}>
              <td style="padding: 8px; font-weight: bold;">Konu:</td>
              <td style="padding: 8px;">${formData.subject}</td>
            </tr>
          </table>
          
          <h4 style="color: #1e40af; margin-top: 20px;">Mesaj:</h4>
          <div style="background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #1e40af;">
            ${formData.message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="background-color: #e2e8f0; padding: 15px; border-radius: 0 0 8px 8px; text-align: center; font-size: 12px; color: #64748b;">
          Bu e-posta ERSA Ulaşım web sitesi üzerinden gönderilmiştir.<br>
          Tarih: ${new Date().toLocaleString('tr-TR')}
        </div>
      </div>
    `;

    const mailOptions = {
      from: this.config.gmail,
      to: this.config.gmail, // Kendi e-postanıza gönder
      subject: `ERSA - ${formData.formType}: ${formData.subject}`,
      html: htmlTemplate,
      replyTo: formData.email // Yanıtla tuşuna basınca form gönderen kişiye gider
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return true;
    } catch (error) {
      console.error('Email sending failed:', error);
      return false;
    }
  }

  async testConnection(): Promise<boolean> {
    if (!this.transporter) return false;
    
    try {
      await this.transporter.verify();
      return true;
    } catch (error) {
      console.error('Email connection test failed:', error);
      return false;
    }
  }
}

// Singleton instance
let emailService: EmailService | null = null;

export function getEmailService(): EmailService {
  if (!emailService) {
    const gmail = process.env.GMAIL_ADDRESS;
    const appPassword = process.env.GMAIL_APP_PASSWORD;
    
    if (gmail && appPassword) {
      emailService = new EmailService({ gmail, appPassword });
    } else {
      emailService = new EmailService(); // No config - will throw on use
    }
  }
  return emailService;
}