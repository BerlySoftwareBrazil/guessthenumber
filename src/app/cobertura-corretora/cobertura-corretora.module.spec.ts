import { CoberturaCorretoraModule } from './cobertura-corretora.module';

describe('CoberturaCorretoraModule', () => {
  let coberturaCorretoraModule: CoberturaCorretoraModule;

  beforeEach(() => {
    coberturaCorretoraModule = new CoberturaCorretoraModule();
  });

  it('should create an instance', () => {
    expect(coberturaCorretoraModule).toBeTruthy();
  });
});
