//app-facing types
//define the app-facing type: your "clean" contract
//components are only allowed to import this type!
//THIS IS ALL COMPONENTS WILL EVER SEE
export interface Weather {
  weatherType: string;
  weatherDesc: string;
  weatherIcon: string;

  temp: {
    k: number;
    c: number;
    f: number;
  };

  tempFeelsLike: {
    k: number;
    c: number;
    f: number;
  };

  humidity: number;
  clouds: number;
  sunrise: number;
  sunset: number;
}
