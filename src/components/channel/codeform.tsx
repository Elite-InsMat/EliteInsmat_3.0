import React, { useState } from 'react';

const CodeForm = ({ name, setIsHidden }: Props): JSX.Element => {
  const [code, setCode] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (code === 'xd') {
      alert('The magics have been unleashed! :)');
      setIsHidden(false);
    } else {
      alert('Incorrect code! :(');
    }
  };
  return (
    <form className="secret-form" onSubmit={e => handleSubmit(e)}>
      <label>
        <p className="forms-p">Enter superduper secret code: </p>
        <input type="text" value={code} onChange={e => setCode(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

type Props = {
  name: string;
  setIsHidden: React.Dispatch<boolean>;
};

export default CodeForm;
