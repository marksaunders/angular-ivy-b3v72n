import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { OwnerType } from './types/ownerType';
import { OwnerInputType } from './types/ownerInputType';

@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
  public owners: OwnerType[];
  public owner: OwnerType;
  public createdOwner: OwnerType;
  public updatedOwner: OwnerType;

  constructor(private apollo: Apollo, httpLink: HttpLink) {
    apollo.create({
      link: httpLink.create({ uri: 'https://localhost:5001/graphql' }),
      cache: new InMemoryCache()
    })
  }
}