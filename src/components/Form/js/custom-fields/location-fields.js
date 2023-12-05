/**
 * LocationFields component
 * @param {HTMLFormElement} - The select element itself
 */
export default class LocationFields {
  constructor(stateField, cityField) {
    this.stateField = stateField;
    this.placeholders = {
      state: 'Selecione um estado',
      city: 'Selecione uma cidade',
    };
    this.initStateField();
    if (cityField) {
      this.cityField = cityField;
    }
  }

  async getStatesList() {
    const statesListCache = localStorage.getItem('statesList');
    if (!statesListCache) {
      const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome');
      const statesList = await res.json();
      localStorage.setItem('statesList', JSON.stringify(statesList));
      return statesList;
    }
    return JSON.parse(statesListCache);
  }

  async initStateField() {
    const statesList = await this.getStatesList();

    const placeHolderOption = document.createElement('option');
    placeHolderOption.text = this.placeholders.state;
    placeHolderOption.value = '';
    this.stateField.add(placeHolderOption);

    for (const state of statesList) {
      const option = document.createElement('option');
      option.text = state.nome;
      option.value = state.sigla;
      this.stateField.add(option);
    }

    placeHolderOption.disabled = true;

    if (this.stateField.dataset.defaultValue) {
      for (const state of statesList) {
        if (state.sigla == this.stateField.dataset.defaultValue) {
          this.stateField.value = state.sigla;
          if (this.cityField) {
            await this.updateCityField();
          }
        }
      }
    }

    if (this.cityField) {
      this.stateField.addEventListener('change', () => {
        this.updateCityField();
      });
    }
  }

  async getCitiesList() {
    const res = await fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${this.stateField.value}/municipios`
    );
    const citiesList = await res.json();
    return citiesList;
  }

  async updateCityField() {
    this.cityField.innerHTML = '';
    const citiesList = await this.getCitiesList();

    const placeHolderOption = document.createElement('option');
    placeHolderOption.text = this.placeholders.city;
    placeHolderOption.value = '';
    this.cityField.add(placeHolderOption);

    for (const city of citiesList) {
      const option = document.createElement('option');
      option.text = city.nome;
      option.value = city.nome;
      this.cityField.add(option);
    }

    placeHolderOption.disabled = true;
    this.cityField.disabled = false;
  }
}
