import { TIdentifierNamesGeneratorFactory } from '../../types/container/generators/TIdentifierNamesGeneratorFactory';
import { TStringArrayEncoding } from '../../types/options/TStringArrayEncoding';
import { IArrayUtils } from '../../interfaces/utils/IArrayUtils';
import { ICryptUtilsStringArray } from '../../interfaces/utils/ICryptUtilsStringArray';
import { IOptions } from '../../interfaces/options/IOptions';
import { IRandomGenerator } from '../../interfaces/utils/IRandomGenerator';
import { IStringArrayStorage } from '../../interfaces/storages/string-array-transformers/IStringArrayStorage';
import { IStringArrayStorageItemData } from '../../interfaces/storages/string-array-transformers/IStringArrayStorageItem';
import { MapStorage } from '../MapStorage';
export declare class StringArrayStorage extends MapStorage<`${string}-${TStringArrayEncoding}`, IStringArrayStorageItemData> implements IStringArrayStorage {
    private static readonly minimumRotationAmount;
    private static readonly maximumRotationAmount;
    private static readonly minimumIndexShiftAmount;
    private static readonly maximumIndexShiftAmount;
    private static readonly rc4KeyLength;
    private static readonly rc4KeysCount;
    private static readonly stringArrayFunctionNameLength;
    private readonly arrayUtils;
    private readonly cryptUtilsStringArray;
    private readonly identifierNamesGenerator;
    private readonly rc4Keys;
    private readonly rc4EncodedValuesSourcesCache;
    private indexShiftAmount;
    private rotationAmount;
    private stringArrayStorageName;
    private readonly stringArrayStorageCallsWrapperNamesMap;
    constructor(identifierNamesGeneratorFactory: TIdentifierNamesGeneratorFactory, arrayUtils: IArrayUtils, randomGenerator: IRandomGenerator, options: IOptions, cryptUtilsStringArray: ICryptUtilsStringArray);
    initialize(): void;
    get(value: string): IStringArrayStorageItemData;
    getIndexShiftAmount(): number;
    getRotationAmount(): number;
    getStorageName(): string;
    getStorageId(): string;
    getStorageCallsWrapperName(stringArrayEncoding: TStringArrayEncoding | null): string;
    rotateStorage(): void;
    shuffleStorage(): void;
    private getOrSetIfDoesNotExist;
    private getEncodedValue;
}
