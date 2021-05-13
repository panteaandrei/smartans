<template>
  <div>
    <nav class="navbar navbar-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            src="../assets/logo.svg"
            alt=""
            width="151"
            height="36"
            class="d-inline-block align-text-top"
          />
        </a>
      </div>
    </nav>
    <section>
      <div class="title">
        Găsește jobul <br />
        <a style="color: #053afa">potrivit</a> pentru tine
      </div>
      <div class="subtitle">
        Te ajutăm să obții locul de muncă potrivit.<br />
        Lasă-ți talentul, personalitatea și potențialul să vorbească pentru
        tine.
      </div>
      <div class="images">
        <img class="dotterSquare" src="../assets/dotted-square.svg" />
        <img class="disabled" src="../assets/disabled-presentation.png" />
      </div>
    </section>
    <section>
      <div class="title2">
        <b> Construiește-ți CV-ul simplu și rapid cu ajutorul nostru</b>
      </div>
      <div class="subtitle2">
        CV-ul este primul pas către jobul dorit.<br />
        Construiește-ți CV-ul potrivit pentru tine, cu ajutorul procesului
        nostru ușor de urmărit.
      </div>
      <img class="macbook-image" src="../assets/macbook.svg" />
      <sm-button type="tertiary" button-text="Adaugă experiență" :icon-before="'fa fa-plus'" class="mr-auto" @handleClick="addExperience"/>
    </section>
    <section>
    </section>
  </div>
</template>

<script>
</script>
<style lang="scss">
section {
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 100px;
  transition: 0.5s ease;
}
section:nth-child(even) {
  background-color: #f8f9ff;
}
.images {
  position: relative;
  left: 429px;
  bottom: 121px;
  .disabled {
    width: 520px;
    height: 444px;
    z-index: 2;
    border-top-left-radius: 2%;
    border-top-right-radius: 10%;
    border-bottom-left-radius: 10%;
    border-bottom-right-radius: 2%;
  }
  .dotterSquare {
    position: relative;
    bottom: 213px;
    z-index: 1;
    left: 76px;
  }
}
.title {
  position: relative;
  width: 635px;
  height: 168px;
  left: 165px;
  top: 47px;
  text-align: left;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 56px;
  line-height: 84px;
  letter-spacing: -0.02em;
  color: #0e0e2c;
}
.title2 {
  position: relative;
  width: 635px;
  height: 168px;
  left: 165px;
  top: 179px;
  //styleName: Header 2 - 40;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.02em;
  text-align: left;

  color: #0e0e2c;
}
.subtitle2 {
  position: relative;
  width: 635px;
  height: 72px;
  left: 165px;
  top: 180px;
  text-align: left;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #424b6b;
}
.macbook-image {
  position: relative;
  height: 447.94049072265625px;
  width: 764px;
  left: 600px;
  bottom: 80px;
}
.subtitle {
  position: relative;
  width: 635px;
  height: 72px;
  left: 165px;
  top: 86px;
  text-align: left;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  display: flex;
  align-items: center;
  color: #424b6b;
}
nav {
  background-color: #fafcfe;
  box-shadow: 0px 4px 10px rgba(99, 111, 153, 0.06);
}
</style>
