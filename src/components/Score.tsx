type scoreType = {
  score: number;
};

const Score = ({ score }: scoreType): JSX.Element => {
  return (
    <div>
      <h3 className="my-4 text-3xl">Your Total Score : {score}</h3>
    </div>
  );
};

export default Score;
