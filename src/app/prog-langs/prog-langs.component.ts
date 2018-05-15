import { Component, OnInit } from '@angular/core';
import { ProgrammingLanguage } from "./ProgrammingLanguage";

@Component
  ({
    selector: 'app-prog-langs',
    templateUrl: './prog-langs.component.html',
    styleUrls: ['./prog-langs.component.css']
  })

export class ProgLangsComponent implements OnInit
{

  constructor() { }
  ngOnInit()
  {
  }

  //programmingLanguages: ProgrammingLanguage[];
  // HOST THE IMAGES LOCALLY
  programmingLanguages =
  [
    {
      name: "C++",
      imgPath: "https://i.imgur.com/eRRyL65.png",
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
