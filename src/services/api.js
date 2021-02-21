import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

/**
 * Observações para a baseURL:
 * 
 * iOS com Emulador: localhost
 * iOS com Dispositivo Físico: IP da máquina
 * 
 * Android com Emulador: localhost
 *    Para utilizar 'localhost', é necessário apontar a Porta da sua máquina 
 *    para a Porta do dispositivo no Emulador. No terminal, execute:
 *    $ adb reverse tcp:3333 tcp:3333 * 
 * Android com Emulador (Android Studio): 10.0.2.2
 * Android com Emulador (Genymotion): 10.0.3.2 
 * Android com Dispositivo Físico: IP da máquina
 */