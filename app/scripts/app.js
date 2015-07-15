'use strict';

/**
 * @ngdoc overview
 * @name mineralDbApp
 * @description
 * # mineralDbApp
 *
 * Main module of the application.
 */
angular
  .module('mineralDbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/minerals', {
        templateUrl: 'views/minerals.html',
        controller: 'MineralsCtrl',
        controllerAs: 'minerals'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'login'
      })
      .when('/-Ju2giOH8Hb7Kik3dTi-', {
        templateUrl: 'views/quartz.html',
        controller: 'QuartzCtrl',
        controllerAs: 'quartz'
      })
      .when('/-Ju2giOH8Hb7Kik3dTi-', {
        templateUrl: 'views/quartz.html',
        controller: 'QuartzCtrl',
        controllerAs: 'quartz'
      })
      .when('/minerals/diamond', {
        templateUrl: 'views/minerals/diamond.html',
        controller: 'MineralsDiamondCtrl',
        controllerAs: 'minerals/diamond'
      })
      .when('/minerals/quartz', {
        templateUrl: 'views/minerals/quartz.html',
        controller: 'MineralsQuartzCtrl',
        controllerAs: 'minerals/quartz'
      })
      .when('/minerals/Quartz', {
        templateUrl: 'views/minerals/quartz.html',
        controller: 'MineralsQuartzCtrl',
        controllerAs: 'minerals/Quartz'
      })
      .when('/minerals/Diamond', {
        templateUrl: 'views/minerals/diamond.html',
        controller: 'MineralsDiamondCtrl',
        controllerAs: 'minerals/Diamond'
      })
      .when('/minerals/Aragonite', {
        templateUrl: 'views/minerals/aragonite.html',
        controller: 'MineralsAragoniteCtrl',
        controllerAs: 'minerals/Aragonite'
      })
      .when('/minerals/Acanthite', {
        templateUrl: 'views/minerals/acanthite.html',
        controller: 'MineralsAcanthiteCtrl',
        controllerAs: 'minerals/Acanthite'
      })
      .when('/minerals/Argentite', {
        templateUrl: 'views/minerals/argentite.html',
        controller: 'MineralsArgentiteCtrl',
        controllerAs: 'minerals/Argentite'
      })
      .when('/minerals/Arsenopyrite', {
        templateUrl: 'views/minerals/arsenopyrite.html',
        controller: 'MineralsArsenopyriteCtrl',
        controllerAs: 'minerals/Arsenopyrite'
      })
      .when('/minerals/Azurite', {
        templateUrl: 'views/minerals/azurite.html',
        controller: 'MineralsAzuriteCtrl',
        controllerAs: 'minerals/Azurite'
      })
      .when('/minerals/Barite', {
        templateUrl: 'views/minerals/barite.html',
        controller: 'MineralsBariteCtrl',
        controllerAs: 'minerals/Barite'
      })
      .when('/minerals/Bauxite', {
        templateUrl: 'views/minerals/bauxite.html',
        controller: 'MineralsBauxiteCtrl',
        controllerAs: 'minerals/Bauxite'
      })
      .when('/minerals/Bornite', {
        templateUrl: 'views/minerals/bornite.html',
        controller: 'MineralsBorniteCtrl',
        controllerAs: 'minerals/Bornite'
      })
      .when('/minerals/Brucite', {
        templateUrl: 'views/minerals/brucite.html',
        controller: 'MineralsBruciteCtrl',
        controllerAs: 'minerals/Brucite'
      })
      .when('/minerals/Calcite', {
        templateUrl: 'views/minerals/calcite.html',
        controller: 'MineralsCalciteCtrl',
        controllerAs: 'minerals/Calcite'
      })
      .when('/minerals/Cassiterite', {
        templateUrl: 'views/minerals/cassiterite.html',
        controller: 'MineralsCassiteriteCtrl',
        controllerAs: 'minerals/Cassiterite'
      })
      .when('/minerals/Cerussite', {
        templateUrl: 'views/minerals/cerussite.html',
        controller: 'MineralsCerussiteCtrl',
        controllerAs: 'minerals/Cerussite'
      })
      .when('/minerals/Chalcocite', {
        templateUrl: 'views/minerals/chalcocite.html',
        controller: 'MineralsChalcociteCtrl',
        controllerAs: 'minerals/Chalcocite'
      })
      .when('/minerals/Chalcopyrite', {
        templateUrl: 'views/minerals/chalcopyrite.html',
        controller: 'MineralsChalcopyriteCtrl',
        controllerAs: 'minerals/Chalcopyrite'
      })
      .when('/minerals/Chromite', {
        templateUrl: 'views/minerals/chromite.html',
        controller: 'MineralsChromiteCtrl',
        controllerAs: 'minerals/Chromite'
      })
      .when('/minerals/Cinnabar', {
        templateUrl: 'views/minerals/cinnabar.html',
        controller: 'MineralsCinnabarCtrl',
        controllerAs: 'minerals/Cinnabar'
      })
      .when('/minerals/Copper', {
        templateUrl: 'views/minerals/copper.html',
        controller: 'MineralsCopperCtrl',
        controllerAs: 'minerals/Copper'
      })
      .when('/minerals/Corundum', {
        templateUrl: 'views/minerals/corundum.html',
        controller: 'MineralsCorundumCtrl',
        controllerAs: 'minerals/Corundum'
      })
      .when('/minerals/Covellite', {
        templateUrl: 'views/minerals/covellite.html',
        controller: 'MineralsCovelliteCtrl',
        controllerAs: 'minerals/Covellite'
      })
      .when('/minerals/Diaspore', {
        templateUrl: 'views/minerals/diaspore.html',
        controller: 'MineralsDiasporeCtrl',
        controllerAs: 'minerals/Diaspore'
      })
      .when('/minerals/Dolomite', {
        templateUrl: 'views/minerals/dolomite.html',
        controller: 'MineralsDolomiteCtrl',
        controllerAs: 'minerals/Dolomite'
      })
      .when('/minerals/Fluorite', {
        templateUrl: 'views/minerals/fluorite.html',
        controller: 'MineralsFluoriteCtrl',
        controllerAs: 'minerals/Fluorite'
      })
      .when('/minerals/Galena', {
        templateUrl: 'views/minerals/galena.html',
        controller: 'MineralsGalenaCtrl',
        controllerAs: 'minerals/Galena'
      })
      .when('/minerals/Goethite', {
        templateUrl: 'views/minerals/goethite.html',
        controller: 'MineralsGoethiteCtrl',
        controllerAs: 'minerals/Goethite'
      })
      .when('/minerals/Gold', {
        templateUrl: 'views/minerals/gold.html',
        controller: 'MineralsGoldCtrl',
        controllerAs: 'minerals/Gold'
      })
      .when('/minerals/Gypsum', {
        templateUrl: 'views/minerals/gypsum.html',
        controller: 'MineralsGypsumCtrl',
        controllerAs: 'minerals/Gypsum'
      })
      .when('/minerals/Halite', {
        templateUrl: 'views/minerals/halite.html',
        controller: 'MineralsHaliteCtrl',
        controllerAs: 'minerals/Halite'
      })
      .when('/minerals/Hematite', {
        templateUrl: 'views/minerals/hematite.html',
        controller: 'MineralsHematiteCtrl',
        controllerAs: 'minerals/Hematite'
      })
      .when('/minerals/Ilmenite', {
        templateUrl: 'views/minerals/ilmenite.html',
        controller: 'MineralsIlmeniteCtrl',
        controllerAs: 'minerals/Ilmenite'
      })
      .when('/minerals/Magnesite', {
        templateUrl: 'views/minerals/magnesite.html',
        controller: 'MineralsMagnesiteCtrl',
        controllerAs: 'minerals/Magnesite'
      })
      .when('/minerals/Magnetite', {
        templateUrl: 'views/minerals/magnetite.html',
        controller: 'MineralsMagnetiteCtrl',
        controllerAs: 'minerals/Magnetite'
      })
      .when('/minerals/Malachite', {
        templateUrl: 'views/minerals/malachite.html',
        controller: 'MineralsMalachiteCtrl',
        controllerAs: 'minerals/Malachite'
      })
      .when('/minerals/Marcasite', {
        templateUrl: 'views/minerals/marcasite.html',
        controller: 'MineralsMarcasiteCtrl',
        controllerAs: 'minerals/Marcasite'
      })
      .when('/minerals/Molybdenite', {
        templateUrl: 'views/minerals/molybdenite.html',
        controller: 'MineralsMolybdeniteCtrl',
        controllerAs: 'minerals/Molybdenite'
      })
      .when('/minerals/Orpiment', {
        templateUrl: 'views/minerals/orpiment.html',
        controller: 'MineralsOrpimentCtrl',
        controllerAs: 'minerals/Orpiment'
      })
      .when('/minerals/Pyrite', {
        templateUrl: 'views/minerals/pyrite.html',
        controller: 'MineralsPyriteCtrl',
        controllerAs: 'minerals/Pyrite'
      })
      .when('/minerals/Pyrolusite', {
        templateUrl: 'views/minerals/pyrolusite.html',
        controller: 'MineralsPyrolusiteCtrl',
        controllerAs: 'minerals/Pyrolusite'
      })
      .when('/minerals/Pyrrhotite', {
        templateUrl: 'views/minerals/pyrrhotite.html',
        controller: 'MineralsPyrrhotiteCtrl',
        controllerAs: 'minerals/Pyrrhotite'
      })
      .when('/minerals/Realgar', {
        templateUrl: 'views/minerals/realgar.html',
        controller: 'MineralsRealgarCtrl',
        controllerAs: 'minerals/Realgar'
      })
      .when('/minerals/Rhodochrosite', {
        templateUrl: 'views/minerals/rhodochrosite.html',
        controller: 'MineralsRhodochrositeCtrl',
        controllerAs: 'minerals/Rhodochrosite'
      })
      .when('/minerals/Romanechite', {
        templateUrl: 'views/minerals/romanechite.html',
        controller: 'MineralsRomanechiteCtrl',
        controllerAs: 'minerals/Romanechite'
      })
      .when('/minerals/Rutile', {
        templateUrl: 'views/minerals/rutile.html',
        controller: 'MineralsRutileCtrl',
        controllerAs: 'minerals/Rutile'
      })
      .when('/minerals/Scheelite', {
        templateUrl: 'views/minerals/scheelite.html',
        controller: 'MineralsScheeliteCtrl',
        controllerAs: 'minerals/Scheelite'
      })
      .when('/minerals/Siderite', {
        templateUrl: 'views/minerals/siderite.html',
        controller: 'MineralsSideriteCtrl',
        controllerAs: 'minerals/Siderite'
      })
      .when('/minerals/Silver', {
        templateUrl: 'views/minerals/silver.html',
        controller: 'MineralsSilverCtrl',
        controllerAs: 'minerals/Silver'
      })
      .when('/minerals/Smithsonite', {
        templateUrl: 'views/minerals/smithsonite.html',
        controller: 'MineralsSmithsoniteCtrl',
        controllerAs: 'minerals/Smithsonite'
      })
      .when('/minerals/Sphalerite', {
        templateUrl: 'views/minerals/sphalerite.html',
        controller: 'MineralsSphaleriteCtrl',
        controllerAs: 'minerals/Sphalerite'
      })
      .when('/minerals/Stibnite', {
        templateUrl: 'views/minerals/stibnite.html',
        controller: 'MineralsStibniteCtrl',
        controllerAs: 'minerals/Stibnite'
      })
      .when('/minerals/Sulfur', {
        templateUrl: 'views/minerals/sulfur.html',
        controller: 'MineralsSulfurCtrl',
        controllerAs: 'minerals/Sulfur'
      })
      .when('/minerals/Sylvite', {
        templateUrl: 'views/minerals/sylvite.html',
        controller: 'MineralsSylviteCtrl',
        controllerAs: 'minerals/Sylvite'
      })
      .when('/minerals/Tenorite', {
        templateUrl: 'views/minerals/tenorite.html',
        controller: 'MineralsTenoriteCtrl',
        controllerAs: 'minerals/Tenorite'
      })
      .when('/minerals/Ulexite', {
        templateUrl: 'views/minerals/ulexite.html',
        controller: 'MineralsUlexiteCtrl',
        controllerAs: 'minerals/Ulexite'
      })
      .when('/minerals/Wolframite', {
        templateUrl: 'views/minerals/wolframite.html',
        controller: 'MineralsWolframiteCtrl',
        controllerAs: 'minerals/Wolframite'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
