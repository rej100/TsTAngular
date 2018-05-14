import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguage } from "./ProgrammingLanguage";

@Component
  ({
    selector: 'app-prog-langs',
    templateUrl: './prog-langs.component.html',
    styleUrls: ['./prog-langs.component.css']
  })

export class ProgLangsComponent implements OnInit {


  constructor() { }

  ngOnInit() {
    console.log(this.programmingLanguages);
  }

  //programmingLanguages: ProgrammingLanguage[];
  // HOST THE IMAGES LOCALLY
  programmingLanguages =
  [
    {
      name: "C++",
      imgPath: "https://png.kisspng.com/sh/e18690b1c2da6e2010bfdc8910de32dc/L4Dxd3E5UME5OGU1UJHyaIeye7r6kCBvb155gNc2Yz3zgrFukvFudZpzf591YX7qhbLuhb1kd551jeZucj3sc7F1k71kd551jeY2cILyd8Pojf1qdpgyTdNsYXTmQra4VvVnP2kzSqo5Nki8RoW4VcI0OmU5SKkDMEm3PsH1h5==/kisspng-the-c-programming-language-computer-icons-comput-programming-5acadc2e16ef78.280689641523244078094.png",
      pros: ["Fast", "Robust", "Efficient in making video game cheats"],
      cons: ["Hard", "Hard to implement in web development"]
    },
    {
      name: "PHP",
      imgPath: "http://php.net/images/logos/new-php-logo.png",
      pros: ["......", "WTF?"],
      cons: ["Slow", "Deprecated", "Retarded", "Does not comply to any standards whatsoever", "Archaic",]
    }
  ]


}
