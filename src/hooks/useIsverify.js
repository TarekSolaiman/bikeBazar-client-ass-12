const { useEffect, useState } = require("react");

const useIsverify = (email) => {
  const [isVerify, setIsverify] = useState(false);
  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/verify/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsverify(data.isSeller);
        });
    }
  }, [email]);
  return [isVerify];
};

export default useIsverify;
