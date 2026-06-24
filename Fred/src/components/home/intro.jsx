import ParagraphReveal from "../../animations/components/ParagraphReveal";
import PerLetterReveal from "../../animations/components/PerLetterReveal";

function Intro() {
  const lines = [
    "           Design goes beyond visuals —",
    "it’s a language, a philosophy, a bridge",
    "between vision and experience. Every",
    "pixel, every interaction, every choice",
    "shapes a story.",
  ];

  const lines2 = [
    "Design goes beyond",
    "visuals — it’s a language,",
    "a philosophy, a bridge",
    "between vision and",
    "experience. Every pixel,",
    "every interaction, every",
    "choice shapes a story.",
  ];

  return (
    <>
      <ParagraphReveal className="intro">
        <PerLetterReveal lines={lines} className="intro-letter" />
      </ParagraphReveal>
      <ParagraphReveal className="intro2">
        <PerLetterReveal lines={lines2} className="intro-letter" />
      </ParagraphReveal>
    </>
  );
}

export default Intro;
