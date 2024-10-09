import {
  GptMessage,
  MyMessage,
  TextMessageBox,
  TypingLoader,
} from "../../components";

export const OrthographyPage = () => {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-12">
          {/* Bienvenida */}
          <GptMessage text="Hola, puedes escribir tu texto en español, y te ayudo con las correciones" />
          <MyMessage text="Hola, ¿cómo estás?" />

          <TypingLoader className="fade-in" />
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeholder="Escribe aquí tu texto"
        disableCorrections
      />
    </div>
  );
};
