package com.crm.Crm.service;

public interface MailService {
    void sendMail(String toEmail, String subject, String body);
}
