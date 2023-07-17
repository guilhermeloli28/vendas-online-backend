import { Test, TestingModule } from '@nestjs/testing';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CategoryService } from '../category.service';
import { CategoryEntity } from '../entities/category.entity';
import { categoryMock } from '../__mocks__/category.mock';

describe('City Service', () => {
  let service: CategoryService;
  let categoryRepository: Repository<CategoryEntity>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CategoryService,
        {
          provide: getRepositoryToken(CategoryEntity),
          useValue: {
            find: jest.fn().mockResolvedValue([categoryMock]),
            save: jest.fn().mockResolvedValue(categoryMock),
          },
        },
      ],
    }).compile();

    service = module.get<CategoryService>(CategoryService);
    categoryRepository = module.get<Repository<CategoryEntity>>(
      getRepositoryToken(CategoryEntity),
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(categoryRepository).toBeDefined();
  });

  it('should return list category', async () => {
    const categories = await service.findAllCategories();

    expect(categories).toEqual([categoryMock]);
  });

  it('should return error if categories is empty', async () => {
    jest.spyOn(categoryRepository, 'find').mockResolvedValue([]);

    expect(service.findAllCategories()).rejects.toThrowError();
  });

  it('should return error if categories is empty', async () => {
    jest.spyOn(categoryRepository, 'find').mockRejectedValue(new Error());

    expect(service.findAllCategories()).rejects.toThrowError();
  });
});
