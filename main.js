const characterCounter = (props) => {
  const { txtaCharacter, IDtotalCharacter, IDtotalRemaining } = props;
  const $txtaCharacter = document.getElementById(txtaCharacter);
  const $IDtotalCharacter = document.getElementById(IDtotalCharacter);
  const $IDtotalRemaining = document.getElementById(IDtotalRemaining);
  const LIMIT_COUNTER = 100;

  document.addEventListener('keyup', (e) => {
    if (e.target === $txtaCharacter) {
      const data = e.target.value;
      $IDtotalCharacter.textContent = data.length;
      $IDtotalRemaining.textContent = LIMIT_COUNTER - data.length;
    }
  });
};

document.addEventListener('DOMContentLoaded', (e) => {
  const IDCharacters = {
    txtaCharacter: 'txtacharacters',
    IDtotalCharacter: 'totalCharacter',
    IDtotalRemaining: 'totalRemaining',
  };

  characterCounter(IDCharacters);
});
