/**
 * CAHAYA MUSTIKA INTERNESIA - Splash Screen
 * Splash hanya tampil di halaman pertama setiap kunjungan (diatur oleh class
 * "show-splash" di <head>). Pindah halaman atau refresh berikutnya langsung tampil.
 */

(function () {
  'use strict';

  var DISPLAY_DURATION = 350; // Cukup untuk menampilkan logo tanpa terasa lambat

  function hideSplash() {
    var splash = document.getElementById('splash');
    if (splash && !splash.classList.contains('fade-out')) {
      splash.classList.add('fade-out');
    }
  }

  // Tidak perlu menunggu semua gambar selesai dimuat: cukup setelah HTML siap
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setTimeout(hideSplash, DISPLAY_DURATION);
    });
  } else {
    setTimeout(hideSplash, DISPLAY_DURATION);
  }

  // Failsafe agar splash tidak pernah tertahan lama
  setTimeout(hideSplash, 900);

  // Penanganan browser back/forward cache (bfcache)
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      hideSplash();
    }
  });
})();
