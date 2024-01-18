<template>
    <h1>Previous Clients</h1>
    <h3>A sample selection of our large scale event clientele</h3>
    <div class="clients">
        <div class="colA">
            <img src="../assets/clients/perpay.png" alt="PerPay Logo" class="smol">
            <img src="../assets/clients/macys.jpg" alt="">
            <img src="../assets/clients/vicishhh.png" alt="">
            <img src="../assets/clients/gallery.jpg" alt="">
            <img src="../assets/clients/riteaid.jpg" alt="">
            <img src="../assets/clients/f1rstrust-bank-logo.png" alt="">
        </div>

        <div class="colB">
            <img src="../assets/clients/alkx.png" alt="AlkemyX Logo">
            <img src="../assets/clients/pennstate.png" alt="Penn State College Logo" class="smol">
            <img src="../assets/clients/Omega-Optical.jpg" alt="">
            <img src="../assets/clients/giantsupermarket.png" alt="Giant Supermarket Logo" class="smol">
            <img src="../assets/clients/susan-g-komen-for-the-cure-logo-AD2F825068-seeklogo.com.png" alt="Susan G. Komen For The Cure Logo" class="smol">
            <img src="../assets/clients/ccp.png" alt="Community College of Philadelphia Lions Logo">
        </div>

        <div class="colC">
            <img src="../assets/clients/verizon.jpg" alt="">
            <img src="../assets/clients/sprint.png" alt="">
            <img src="../assets/clients/jewish-federation-of-greater-philadelphia.png" alt="">
            <img src="../assets/clients/bai.png" alt="">
            <img src="../assets/clients/PierceCollege-Logo-square.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'ClientList',
};
</script>

<style>
h1 {
    text-align: center;
}

.clients {
    display: flex;
    justify-content: space-around;
    column-count:3;
}

.colA{
    width:35%;
    height:100%;
    column-count:1;
}

.colA img {
    display:block;
    max-width:100%;
}

.colB{
    width:60%;
    height:100%;
    column-count:1;
}

.colB img {
    display:block;
    max-width:100%;
}

.smol {
    width:100%;
}

.colC{
    width:35%;
    height:100%;
    column-count:1;
}

.colC img {
    display:block;
    max-width:100%;
}
</style>
