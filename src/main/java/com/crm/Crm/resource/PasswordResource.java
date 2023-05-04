package com.crm.Crm.resource;

import com.crm.Crm.dto.PasswordDto;
import com.crm.Crm.service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.crypto.BadPaddingException;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.UnsupportedEncodingException;
import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import java.util.List;

@RestController
@RequestMapping("/api/password")
public class PasswordResource {
    @Autowired
    private PasswordService passwordService;

    @GetMapping("/all")
    public ResponseEntity<List<PasswordDto>>getAllPasswords(){
        return new ResponseEntity<>(passwordService.getAllPasswords(), HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<PasswordDto>addPassword(@RequestBody PasswordDto passwordDto) throws UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException {
        return new ResponseEntity<>(passwordService.addPassword(passwordDto),HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PasswordDto>updatePassword(@PathVariable("id")Long id,@RequestBody PasswordDto passwordDto) throws UnsupportedEncodingException, NoSuchPaddingException, IllegalBlockSizeException, NoSuchAlgorithmException, BadPaddingException, InvalidKeyException {
        return new ResponseEntity<>(passwordService.updatePassword(id,passwordDto),HttpStatus.OK);
    }

    @PutMapping("/ranks")
    public ResponseEntity<List<PasswordDto>>updatePasswordsRank(@RequestBody List<PasswordDto> passwordDto){
        return new ResponseEntity<>(passwordService.updateRanks(passwordDto),HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?>deletePassword(@PathVariable("id")Long id){
        passwordService.deletePassword(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
