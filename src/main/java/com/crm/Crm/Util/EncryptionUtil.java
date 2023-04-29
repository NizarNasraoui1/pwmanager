package com.crm.Crm.Util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import javax.crypto.spec.SecretKeySpec;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Component
public class EncryptionUtil {

    @Value("${application.encryption-key}")
    String encryptionKey;

    public String encrypt(String plainText) throws UnsupportedEncodingException, NoSuchPaddingException, NoSuchAlgorithmException, InvalidKeyException, IllegalBlockSizeException, BadPaddingException {
        SecretKeySpec secretKey = getPublicKey();
        Cipher cipher = Cipher.getInstance("AES");
        cipher.init(Cipher.ENCRYPT_MODE, secretKey);
        byte[] plainTextBytes = plainText.getBytes("UTF-8");
        byte[] cipherTextBytes = cipher.doFinal(plainTextBytes);
        return Base64.getEncoder().encodeToString(cipherTextBytes);
    }
    public String decrypt(String cipherText){
        String decriptedText="";
        try{
            SecretKeySpec secretKey = getPublicKey();
            Cipher cipher = Cipher.getInstance("AES");
            cipher.init(Cipher.DECRYPT_MODE, secretKey);
            byte[] cipherTextBytes2 = Base64.getDecoder().decode(cipherText);
            byte[] plainTextBytes2 = cipher.doFinal(cipherTextBytes2);
            decriptedText= new String(plainTextBytes2, "UTF-8");
        }
        catch(Exception e){
            e.printStackTrace();
        }
        return decriptedText;
    }

    public SecretKeySpec getPublicKey() throws UnsupportedEncodingException {
        byte[] keyValue = encryptionKey.getBytes("UTF-8");
        return new SecretKeySpec(keyValue, "AES");
    }
}
