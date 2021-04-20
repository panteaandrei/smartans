<template>
  <div class="about">
    <h1>We are smartans</h1>
      <p>{{visionText}}</p>
  </div>
</template>
<script>
export default {
    name: 'About',
    components: {},
    data(){
        return {
            visionText: "Viziunea noastră este să creăm o comunitate și să oferim acces la piața muncii celor peste 800.000 de persoane cu handicap la nivel național. Ne propunem să ajutăm la crearea unei societăți incluzive în care persoanele cu dizabilități să fie integrate și active în societate, unde să fie reprezentate și, prin urmare, sa poată contribui la bunăstarea lor și a tuturor."
        }
    }
}
</script>
<style lang="scss">
.home {

.logo {
        width: 300px;
        border-radius: 8px;
    }
}
</style>
