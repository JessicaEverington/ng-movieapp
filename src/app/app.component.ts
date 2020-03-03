import { Component } from '@angular/core';
//This controls the id passing
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
//importing form stuff
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
// import movie API
import { MoviesService } from 'src/app/movies.service';
;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movieapp';
  sub: any;
  what: any;
  id: any;
  myForm  = new FormGroup ({
    name: new FormControl()
  });
  movie: any;

  // more vars
  omdb: any[] = [];
  value: any;
  isDone = true;

 //addition contrustors just get added
 constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    public movies:MoviesService,
    private router: Router,
    ) {
    // subscribing is like a listener
    // we are listening to this route
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    this.sub = this.route
    .data
    .subscribe(v => {this.what = v.what;});

    this.myForm = this.formBuilder.group({
        name: 'enter a movie name'
      });

      this.movies
        .defaultMovie<any[]>()
        .subscribe((data: any[]) => {
          console.log(data);
          this.movie = data;
        });
    }

// FUNCTIONS GO HERE

    // this is a Fn tied to the button so onClick it does this
    // Any Fn you want to bind between HTML and your component must live somewhere inside your component
    public search(){
      console.log(this.myForm.controls.name.value);

      this.movies.getMovies(this.myForm.controls.name.value).subscribe((data: any) => {
        // this.omdb = data;
        // console.log(data);

        if (data.Response !== 'False') {
            const items = [];
            for (const key in data) {
              if (data.hasOwnProperty(key)) {
                items.push(data[key]);
              }
            }
            this.movies = items[0];
            this.isDone = true;
        }
      })
    }

    onKeyUp(event: any, data:string) {
      console.log( `Key Up: ${event.target.value} Data: ${data}`);
    }
    onKeyDown(event: any) {
      console.log( `Key Down: ${event.target.value}`);
    }
    onKeyPress(event: any) {
      console.log( `Key Press: ${event.target.value}`);
    }

    goDetails(data) {
        this.router.navigate(['/details', data.imdbID]);
      }

//   ngOnInit(): void {
//   }

ngOnInit() {
    this.movies.defaultMovie();

    // this.myForm.valueChanges
    //   .subscribe(newValue => {
    //     this.omdb = false;
    //     this.value = newValue;

    //     this.search();
    //   }
    //   );
  }
}
