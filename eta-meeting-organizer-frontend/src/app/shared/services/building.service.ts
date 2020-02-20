import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Building } from '~/app/models/building.model';
import { ApiCommunicationService } from './api-communication.service';

@Injectable({providedIn: 'root'})
export class BuildingService {
  public _buildingSub: BehaviorSubject<Building[]> = new BehaviorSubject<Building[]>([]);
  constructor(private readonly buildingCom: ApiCommunicationService) { }
  public get buildingSub() {
    return this._buildingSub;
  }
  public getAllBuildings() {
    this.buildingCom.building()
    .getBuildings()
    .subscribe((building: Building[]) => {
      this._buildingSub.next(building);
    });
  }
  public getOneBuilding(id: number) {
    return this.buildingCom
    .building()
    .getOneBuilding(id);
  }
  public postBuilding(building: Building) {
    return this.buildingCom
    .building()
    .postBuilding(building);
  }
  public updateBuilding(id: number, building: Building) {
    return this.buildingCom
    .building()
    .updateBuilding(id, building);
  }
  public deleteBuilding(id: number) {
    return this.buildingCom
    .building()
    .deleteBuildingId(id);
  }
  public findAllCities() {
    this.buildingCom
    .building()
    .findAllCities();
  }
  public findByCity(city: string) {
    this.buildingCom
    .building()
    .findByCity(city);
  }
}