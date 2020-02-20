package hu.flowacademy.meetingorganizer.config.mailing;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("mailing")
@Data
public class MailingConfig {

  private MailGun mailGun;

  private String mailFrom;

  private String messageTemplate;
}
