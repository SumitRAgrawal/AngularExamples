import { RarelyUsedModule } from './rarely-used.module';

describe('RarelyUsedModule', () => {
  let rarelyUsedModule: RarelyUsedModule;

  beforeEach(() => {
    rarelyUsedModule = new RarelyUsedModule();
  });

  it('should create an instance', () => {
    expect(rarelyUsedModule).toBeTruthy();
  });
});
