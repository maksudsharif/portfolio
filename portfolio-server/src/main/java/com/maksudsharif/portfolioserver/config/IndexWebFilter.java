package com.maksudsharif.portfolioserver.config;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import org.springframework.web.server.WebFilter;
import org.springframework.web.server.WebFilterChain;
import reactor.core.publisher.Mono;

@Component
@Log4j2
public class IndexWebFilter implements WebFilter
{

  /*
   * Auto redirect '/' to default page
   */
  @Override
  public Mono<Void> filter(ServerWebExchange exchange, WebFilterChain chain)
  {
    try {
      if (exchange.getRequest().getURI().getPath().equals("/")) {
        return chain.filter(
            exchange.mutate().request(exchange.getRequest().mutate().path("/index.html").build())
                .build());
      }
    } catch (Exception e) {
      log.error("Unable to redirect '/' to default", e);
      exchange.getResponse().setStatusCode(HttpStatus.INTERNAL_SERVER_ERROR);
      return chain.filter(exchange);
    }

    return chain.filter(exchange);
  }
}
