import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import {
  ChatMessageComponent,
  MyMessageComponent,
  TypingLoaderComponent,
  TextMessageBoxComponent,
  TextMessageBoxFileComponent,
  TextMessageEvent,
  TextMessageBoxSelectComponent,
  TextMessageBoxEvent,
} from '@components/index';
import { Message } from '@interfaces/message.interface';
import { OpenAIService } from '@services/openai.service';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
    TextMessageBoxSelectComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {
  public messages = signal<Message[]>([{ text: 'Hello, World!', isGPT: true }]);
  public isLoading = signal<boolean>(false);
  public openAIService = inject(OpenAIService);

  handleMessage(prompt: string) {
    console.log({ prompt });
  }
  handleMessageWithFile({ prompt, file }: TextMessageEvent) {
    console.log({ prompt, file });
  }
  handleMessageWithSelect(event: TextMessageBoxEvent) {
    console.log({ event });
  }
}
