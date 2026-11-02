import { Fragment, type CSSProperties } from "react";

interface SplitTextProps {
  text: string;
  by?: "words" | "letters";
  /** Class on every piece; the CSS staggers pieces by their --i. */
  partClassName?: string;
}

// Splits a title into words or letters for a staggered entrance. Screen
// readers get the plain text once; the pieces are hidden from them.
export default function SplitText({
  text,
  by = "words",
  partClassName = "split-part",
}: SplitTextProps) {
  let index = 0;
  const piece = (content: string) => (
    <span className={partClassName} style={{ "--i": index++ } as CSSProperties}>
      {content}
    </span>
  );

  return (
    <>
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">
        {text.split(" ").map((word, wordIndex) => (
          <Fragment key={`${word}-${wordIndex}`}>
            {wordIndex > 0 ? " " : null}
            {by === "words" ? (
              piece(word)
            ) : (
              // Letters of one word never wrap apart.
              <span className="inline-block whitespace-nowrap">
                {Array.from(word).map((letter, letterIndex) => (
                  <Fragment key={letterIndex}>{piece(letter)}</Fragment>
                ))}
              </span>
            )}
          </Fragment>
        ))}
      </span>
    </>
  );
}
