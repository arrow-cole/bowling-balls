const search = document.querySelector('#search');
const brand = document.querySelector('#brand');
if (search && brand) {
  const cards = [...document.querySelectorAll('.ball-card')];
  const filter = () => {
    let count = 0;
    cards.forEach(card => {
      card.hidden = !(card.dataset.name.includes(search.value.trim().toLowerCase()) && (!brand.value || card.dataset.brand === brand.value));
      if (!card.hidden) count++;
    });
    document.querySelector('#result-count').textContent = `${count} ${count === 1 ? 'ball' : 'balls'} in the lineup`;
    document.querySelector('#empty').hidden = count !== 0;
  };
  search.addEventListener('input', filter);
  brand.addEventListener('change', filter);
}
