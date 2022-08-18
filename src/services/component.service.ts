import { Repository } from 'sequelize-typescript';
import { databaseConnection } from '../database/connection';
import { Component, Rewiev } from '../database/models';

class ComponentService {
  private readonly componentRepository: Repository<Component>;

  public constructor() {
    this.componentRepository = databaseConnection.getRepository(Component);
  }

  public getAllComponents() {
    return this.componentRepository.findAll();
  }

  public getCompoenentWithRewievsByCompoenentId(id: string) {
    return this.componentRepository.findByPk(id, {
      include: [
        {
          model: Rewiev,
        },
      ],
    });
  }
}

export const componentService = new ComponentService();
