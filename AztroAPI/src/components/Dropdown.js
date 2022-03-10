import React from 'react';

const Dropdown = () => {
  return (
    <section>
      <div class="dropdown is-active">
        <div class="dropdown-trigger">
          <button
            class="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu"
          >
            <span>Dropdown button</span>
            <span class="icon is-small">
              <i class="fas fa-angle-down" aria-hidden="true"></i>
            </span>
          </button>
        </div>
        <div class="dropdown-menu" id="dropdown-menu" role="menu">
          <div class="dropdown-content">
            <a
              href="https://aztro.sameerkumar.website?sign=aries"
              class="dropdown-item"
            >
              Aries
            </a>
            <a
              href="https://aztro.sameerkumar.website?sign=taurus"
              class="dropdown-item"
            >
              Taurus
            </a>
            <a
              href="https://aztro.sameerkumar.website?sign=gemini"
              class="dropdown-item"
            >
              Gemini
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Dropdown;
