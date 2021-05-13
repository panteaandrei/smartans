<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand pl-5" href="#">
        <img src="../assets/partial-logo.svg" width="70" height="24" alt="" />
      </a>
    </nav>
    <div class="container">
      <div class="main-body">
        <h2 class="page-title pt-5 pb-4"><strong>Profilul Meu</strong></h2>

        <div class="row gutters-sm">
          <div class="col-md-4 mb-3">
            <div class="profile-card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    src="../assets/profile.svg"
                    class="rounded-circle"
                    width="150"
                  />
                  <div class="mt-3">
                    <h4 class="profile-title"><b>Alina Manolescu</b></h4>
                    <p class="profile-subtitle mb-1">Casier la Kaufland</p>
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8">
            <div class="normal-card">
              <div class="card-body">
                <div class="row card-title pt-2 pl-4 pb-2">Despre Mine</div>
                <div class="row card-text pl-4">
                  “ Sunt o persoana ambitioasa, determinata si respectoasa,
                  dornica<br />
                  sa lucreze. Am o intelegere de baza a proceselor financiare
                  si<br />
                  cunostinte in programele de munca. “
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>
<style lang="scss">
body {
  margin-top: 20px;
  color: #1a202c;
  text-align: left;
  background-color: #e2e8f0;
}
.page-title {
  //styleName: Header 2 - 40;
  font-family: Poppins;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 60px;
  letter-spacing: -0.02em;
  text-align: left;
}
.card-title {
  //styleName: Subtitle - 24;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
}
.card-text {
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: left;
}
.profile-title {
  //styleName: Subtitle - 24;
  font-family: Poppins;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 36px;
  letter-spacing: 0px;
  text-align: center;
}
.profile-subtitle {
  //styleName: text-14-medium;
  font-family: Poppins;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0px;
  text-align: center;
}
.main-body {
  padding: 15px;
}
.profile-card {
  padding: 3.125rem 0 3.5rem 0;
  background: #ffffff;
  /* Dorian - Subtle background */

  border: 1px solid #ecf1f4;
  box-shadow: 2px 4px 30px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
}
.normal-card {
  background: #f1f3fa;
  border-radius: 8px;
  height: 25vh;
}
</style>
