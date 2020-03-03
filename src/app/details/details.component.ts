import { Component, OnInit } from '@angular/core';
// import movie API
import { MoviesService } from 'src/app/movies.service';
//This controls the id passing
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
    value: string;
    data: any;

  constructor(private route: ActivatedRoute, private movies:MoviesService,) { }

//   ngOnInit(): void {
//   }

ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.value = params.get('value');

      this.refresh();
    });
  }

  refresh() {
    this.movies.getDetails(this.value).subscribe(data => {
      this.data = data;
    })
  }

}
