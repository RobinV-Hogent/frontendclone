import { useState } from "react";
import { Alert, Button } from "react-bootstrap";

export default function QuestionItem(q) {
  const [answer, setAnswer] = useState("No answer given yet");

  return (
    <Alert key={q.id} variant="success" id={q.id}>
      <Alert.Heading>{q.question}</Alert.Heading>
      <hr />
      <p className="mb-0">
        <Button onClick={() => setAnswer(q.answer1)} className="m-1">
          {q.answer1}
        </Button>
        <Button onClick={() => setAnswer(q.answer2)} className="m-1">
          {q.answer2}
        </Button>
        <Button onClick={() => setAnswer(q.answer3)} className="m-1">
          {q.answer3}
        </Button>
      </p>
      <hr />
      <p>
        <b>{answer}</b>
      </p>
    </Alert>
  );
}
