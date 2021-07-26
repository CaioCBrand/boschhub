import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfilesService } from '../profiles.service';

@Component({
  selector: 'profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss']
})
export class ProfileDetailComponent implements OnInit {

  name: string = '';
  properties: any = '';
  repos: any = '';
  inscription: any = '';
  
  constructor(
    private route: ActivatedRoute,
    private profilesService: ProfilesService
  ) {
  }

  ngOnInit(): void {
    this.inscription = this.route.params.subscribe(
      (params: any) => {
        this.name = params['name'];
      }
    );

    this.profilesService.getUser(this.name)
      .subscribe(
        data => {
          this.properties = data;
          console.log(this.properties);
        }
    );

    this.profilesService.getUserRepos(this.name)
      .subscribe(
        data => {
          this.repos = data;
          console.log(this.repos);
        }
    )
    
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }

}
