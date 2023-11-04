export const FaqCard = ({ answer, question }: any) => (
  <div className="my-6">
    {question && <h3 className="my-3">{question}</h3>}

    {answer && <p>{answer}</p>}
  </div>
);
