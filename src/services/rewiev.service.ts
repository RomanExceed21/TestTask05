import { Repository } from 'sequelize-typescript';
import { UpdateRewievDto } from '../controllers/dto/rewiev.dto';
import { databaseConnection } from '../database/connection';
import { Component, Meal, Rewiev } from '../database/models';
import { returnIfUpdated } from './helpers/rewiev.helper';

class RewievService {
  private readonly rewievRepository: Repository<Rewiev>;

  public constructor() {
    this.rewievRepository = databaseConnection.getRepository(Rewiev);
  }

  public getAllRewievs() {
    return this.rewievRepository.findAll({
      include: [
        {
          model: Meal,
        },

        {
          model: Component,
        },
      ],
    });
  }

  public createNewRewiev(createRewievDto: Rewiev): Promise<Rewiev> {
    return this.rewievRepository.create(createRewievDto);
  }

  public async updateRewiev(id: string, updateRewievDto: UpdateRewievDto): Promise<Rewiev[] | boolean> {
    const result = await this.rewievRepository.update(updateRewievDto, { where: { id }, returning: true });
    return returnIfUpdated<Rewiev>(result);
  }
}

export const rewievService = new RewievService();
