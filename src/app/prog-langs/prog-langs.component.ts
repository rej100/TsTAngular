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
      imgPath: "https://vignette.wikia.nocookie.net/glest/images/4/47/Placeholder.png/revision/latest?cb=20101114155552",
      pros: ["Fast", "Robust", "Efficient in making video game cheats"],
      cons: ["Hard", "Hard to implement in web development"]
    },
    {
      name: "PHP",
      imgPath: "https://vignette.wikia.nocookie.net/glest/images/4/47/Placeholder.png/revision/latest?cb=20101114155552",
      pros: ["......", "WTF?"],
      cons: ["Slow", "Deprecated", "Retarded", "Does not comply to any standards whatsoever", "Archaic",]
    }
  ]


}
