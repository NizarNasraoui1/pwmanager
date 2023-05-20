//package com.crm.Crm.config;
//
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.ComponentScan;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.web.accept.PathExtensionContentNegotiationStrategy;
//import org.springframework.web.servlet.ViewResolver;
//import org.springframework.web.servlet.config.annotation.*;
//import org.springframework.web.servlet.view.InternalResourceViewResolver;
//
//@Configuration
//@EnableWebMvc
//@ComponentScan
//public class WebConfig {
//
//    @Bean
//    public WebMvcConfigurer webMvcConfigurer() {
//        return new WebMvcConfigurer() {
//            public void configureContentNegotiation(ContentNegotiationConfigurer configurer) {
//                configurer.defaultContentTypeStrategy(new PathExtensionContentNegotiationStrategy() {
//                    protected MediaType getMediaTypeForResource(Resource resource) {
//                        MediaType mediaType = super.getMediaTypeForResource(resource);
//                        return mediaType != null ? mediaType : MediaType.APPLICATION_OCTET_STREAM;
//                    }
//                });
//            }
//        };
//    }
//
//}