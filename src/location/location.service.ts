import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationService {

  constructor(
    @InjectRepository(Location) private readonly locationRepository: Repository<Location>,
  ) { }

  create(createLocationDto: CreateLocationDto): Promise<Location> {
    const location: Location = new Location();
    location.name = createLocationDto.name;
    location.building = createLocationDto.building;
    location.number = createLocationDto.number;
    location.area = createLocationDto.area;
    return this.locationRepository.save(location);
  }

  async findAll(): Promise<Location[]> {
    return await this.locationRepository.find();
  }

  async findOne(id: number): Promise<Location> {
    return await this.locationRepository.findOneBy({ id });
  }

  async update(id: number, updateLocationDto: UpdateLocationDto): Promise<Location> {
    const location: Location = new Location();
    location.name = updateLocationDto.name;
    location.building = updateLocationDto.building;
    location.number = updateLocationDto.number;
    location.area = updateLocationDto.area;
    location.id = id;
    return await this.locationRepository.save(location);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.locationRepository.delete(id);
  }
}
