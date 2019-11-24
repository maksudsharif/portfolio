package com.maksudsharif.portfolioserver.config;

import org.springframework.cache.CacheManager;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.CacheControl;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.method.HandlerTypePredicate;
import org.springframework.web.reactive.config.PathMatchConfigurer;
import org.springframework.web.reactive.config.ResourceHandlerRegistry;
import org.springframework.web.reactive.config.WebFluxConfigurer;
import org.springframework.web.reactive.resource.CachingResourceResolver;
import org.springframework.web.reactive.resource.EncodedResourceResolver;

import java.time.Duration;

@Configuration
public class WebfluxConfiguration implements WebFluxConfigurer
{
    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry)
    {
        registry.addResourceHandler("/**")
                .addResourceLocations("classpath:/public/", "classpath:/static/")
                .setCacheControl(CacheControl.maxAge(Duration.ofDays(365))
                .cachePublic())
                .resourceChain(true)
                .addResolver(new EncodedResourceResolver());

    }

    @Override
    public void configurePathMatching(PathMatchConfigurer configurer)
    {
        configurer.addPathPrefix("api", HandlerTypePredicate.forAnnotation(RestController.class));
    }
}
