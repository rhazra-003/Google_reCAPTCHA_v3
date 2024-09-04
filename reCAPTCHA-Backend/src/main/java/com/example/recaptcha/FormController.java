package com.example.recaptcha;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/form")
public class FormController {

    @PostMapping("/submit")
    public String submitForm(@RequestParam String name, @RequestParam String email, @RequestParam String gRecaptchaResponse) {
        // Verify reCAPTCHA
        if (verifyReCAPTCHA(gRecaptchaResponse)) {
            return "Form submitted successfully!";
        } else {
            return "reCAPTCHA verification failed.";
        }
    }

    private boolean verifyReCAPTCHA(String response) {
        // Implement reCAPTCHA verification logic here (use a service like Google reCAPTCHA verification API)
        return true; // Placeholder for actual verification logic
    }
}
