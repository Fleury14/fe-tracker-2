/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars, @typescript-eslint/no-require-imports */
import * as $protobuf from "protobufjs";
import Long = require("long");
/** Represents a Devices */
export class Devices extends $protobuf.rpc.Service {

    /**
     * Constructs a new Devices service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Devices service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Devices;

    /**
     * Calls ListDevices.
     * @param request DevicesRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DevicesResponse
     */
    public listDevices(request: IDevicesRequest, callback: Devices.ListDevicesCallback): void;

    /**
     * Calls ListDevices.
     * @param request DevicesRequest message or plain object
     * @returns Promise
     */
    public listDevices(request: IDevicesRequest): Promise<DevicesResponse>;
}

export namespace Devices {

    /**
     * Callback as used by {@link Devices#listDevices}.
     * @param error Error, if any
     * @param [response] DevicesResponse
     */
    type ListDevicesCallback = (error: (Error|null), response?: DevicesResponse) => void;
}

/** Represents a DeviceControl */
export class DeviceControl extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceControl service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceControl service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceControl;

    /**
     * Calls ResetSystem.
     * @param request ResetSystemRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ResetSystemResponse
     */
    public resetSystem(request: IResetSystemRequest, callback: DeviceControl.ResetSystemCallback): void;

    /**
     * Calls ResetSystem.
     * @param request ResetSystemRequest message or plain object
     * @returns Promise
     */
    public resetSystem(request: IResetSystemRequest): Promise<ResetSystemResponse>;

    /**
     * Calls ResetToMenu.
     * @param request ResetToMenuRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ResetToMenuResponse
     */
    public resetToMenu(request: IResetToMenuRequest, callback: DeviceControl.ResetToMenuCallback): void;

    /**
     * Calls ResetToMenu.
     * @param request ResetToMenuRequest message or plain object
     * @returns Promise
     */
    public resetToMenu(request: IResetToMenuRequest): Promise<ResetToMenuResponse>;

    /**
     * Calls PauseUnpauseEmulation.
     * @param request PauseEmulationRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PauseEmulationResponse
     */
    public pauseUnpauseEmulation(request: IPauseEmulationRequest, callback: DeviceControl.PauseUnpauseEmulationCallback): void;

    /**
     * Calls PauseUnpauseEmulation.
     * @param request PauseEmulationRequest message or plain object
     * @returns Promise
     */
    public pauseUnpauseEmulation(request: IPauseEmulationRequest): Promise<PauseEmulationResponse>;

    /**
     * Calls PauseToggleEmulation.
     * @param request PauseToggleEmulationRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PauseToggleEmulationResponse
     */
    public pauseToggleEmulation(request: IPauseToggleEmulationRequest, callback: DeviceControl.PauseToggleEmulationCallback): void;

    /**
     * Calls PauseToggleEmulation.
     * @param request PauseToggleEmulationRequest message or plain object
     * @returns Promise
     */
    public pauseToggleEmulation(request: IPauseToggleEmulationRequest): Promise<PauseToggleEmulationResponse>;
}

export namespace DeviceControl {

    /**
     * Callback as used by {@link DeviceControl#resetSystem}.
     * @param error Error, if any
     * @param [response] ResetSystemResponse
     */
    type ResetSystemCallback = (error: (Error|null), response?: ResetSystemResponse) => void;

    /**
     * Callback as used by {@link DeviceControl#resetToMenu}.
     * @param error Error, if any
     * @param [response] ResetToMenuResponse
     */
    type ResetToMenuCallback = (error: (Error|null), response?: ResetToMenuResponse) => void;

    /**
     * Callback as used by {@link DeviceControl#pauseUnpauseEmulation}.
     * @param error Error, if any
     * @param [response] PauseEmulationResponse
     */
    type PauseUnpauseEmulationCallback = (error: (Error|null), response?: PauseEmulationResponse) => void;

    /**
     * Callback as used by {@link DeviceControl#pauseToggleEmulation}.
     * @param error Error, if any
     * @param [response] PauseToggleEmulationResponse
     */
    type PauseToggleEmulationCallback = (error: (Error|null), response?: PauseToggleEmulationResponse) => void;
}

/** Represents a DeviceMemory */
export class DeviceMemory extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceMemory service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceMemory service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceMemory;

    /**
     * Calls MappingDetect.
     * @param request DetectMemoryMappingRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and DetectMemoryMappingResponse
     */
    public mappingDetect(request: IDetectMemoryMappingRequest, callback: DeviceMemory.MappingDetectCallback): void;

    /**
     * Calls MappingDetect.
     * @param request DetectMemoryMappingRequest message or plain object
     * @returns Promise
     */
    public mappingDetect(request: IDetectMemoryMappingRequest): Promise<DetectMemoryMappingResponse>;

    /**
     * Calls SingleRead.
     * @param request SingleReadMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SingleReadMemoryResponse
     */
    public singleRead(request: ISingleReadMemoryRequest, callback: DeviceMemory.SingleReadCallback): void;

    /**
     * Calls SingleRead.
     * @param request SingleReadMemoryRequest message or plain object
     * @returns Promise
     */
    public singleRead(request: ISingleReadMemoryRequest): Promise<SingleReadMemoryResponse>;

    /**
     * Calls SingleWrite.
     * @param request SingleWriteMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and SingleWriteMemoryResponse
     */
    public singleWrite(request: ISingleWriteMemoryRequest, callback: DeviceMemory.SingleWriteCallback): void;

    /**
     * Calls SingleWrite.
     * @param request SingleWriteMemoryRequest message or plain object
     * @returns Promise
     */
    public singleWrite(request: ISingleWriteMemoryRequest): Promise<SingleWriteMemoryResponse>;

    /**
     * Calls MultiRead.
     * @param request MultiReadMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MultiReadMemoryResponse
     */
    public multiRead(request: IMultiReadMemoryRequest, callback: DeviceMemory.MultiReadCallback): void;

    /**
     * Calls MultiRead.
     * @param request MultiReadMemoryRequest message or plain object
     * @returns Promise
     */
    public multiRead(request: IMultiReadMemoryRequest): Promise<MultiReadMemoryResponse>;

    /**
     * Calls MultiWrite.
     * @param request MultiWriteMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MultiWriteMemoryResponse
     */
    public multiWrite(request: IMultiWriteMemoryRequest, callback: DeviceMemory.MultiWriteCallback): void;

    /**
     * Calls MultiWrite.
     * @param request MultiWriteMemoryRequest message or plain object
     * @returns Promise
     */
    public multiWrite(request: IMultiWriteMemoryRequest): Promise<MultiWriteMemoryResponse>;

    /**
     * Calls StreamRead.
     * @param request MultiReadMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MultiReadMemoryResponse
     */
    public streamRead(request: IMultiReadMemoryRequest, callback: DeviceMemory.StreamReadCallback): void;

    /**
     * Calls StreamRead.
     * @param request MultiReadMemoryRequest message or plain object
     * @returns Promise
     */
    public streamRead(request: IMultiReadMemoryRequest): Promise<MultiReadMemoryResponse>;

    /**
     * Calls StreamWrite.
     * @param request MultiWriteMemoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MultiWriteMemoryResponse
     */
    public streamWrite(request: IMultiWriteMemoryRequest, callback: DeviceMemory.StreamWriteCallback): void;

    /**
     * Calls StreamWrite.
     * @param request MultiWriteMemoryRequest message or plain object
     * @returns Promise
     */
    public streamWrite(request: IMultiWriteMemoryRequest): Promise<MultiWriteMemoryResponse>;
}

export namespace DeviceMemory {

    /**
     * Callback as used by {@link DeviceMemory#mappingDetect}.
     * @param error Error, if any
     * @param [response] DetectMemoryMappingResponse
     */
    type MappingDetectCallback = (error: (Error|null), response?: DetectMemoryMappingResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#singleRead}.
     * @param error Error, if any
     * @param [response] SingleReadMemoryResponse
     */
    type SingleReadCallback = (error: (Error|null), response?: SingleReadMemoryResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#singleWrite}.
     * @param error Error, if any
     * @param [response] SingleWriteMemoryResponse
     */
    type SingleWriteCallback = (error: (Error|null), response?: SingleWriteMemoryResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#multiRead}.
     * @param error Error, if any
     * @param [response] MultiReadMemoryResponse
     */
    type MultiReadCallback = (error: (Error|null), response?: MultiReadMemoryResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#multiWrite}.
     * @param error Error, if any
     * @param [response] MultiWriteMemoryResponse
     */
    type MultiWriteCallback = (error: (Error|null), response?: MultiWriteMemoryResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#streamRead}.
     * @param error Error, if any
     * @param [response] MultiReadMemoryResponse
     */
    type StreamReadCallback = (error: (Error|null), response?: MultiReadMemoryResponse) => void;

    /**
     * Callback as used by {@link DeviceMemory#streamWrite}.
     * @param error Error, if any
     * @param [response] MultiWriteMemoryResponse
     */
    type StreamWriteCallback = (error: (Error|null), response?: MultiWriteMemoryResponse) => void;
}

/** Represents a DeviceFilesystem */
export class DeviceFilesystem extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceFilesystem service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceFilesystem service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceFilesystem;

    /**
     * Calls ReadDirectory.
     * @param request ReadDirectoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and ReadDirectoryResponse
     */
    public readDirectory(request: IReadDirectoryRequest, callback: DeviceFilesystem.ReadDirectoryCallback): void;

    /**
     * Calls ReadDirectory.
     * @param request ReadDirectoryRequest message or plain object
     * @returns Promise
     */
    public readDirectory(request: IReadDirectoryRequest): Promise<ReadDirectoryResponse>;

    /**
     * Calls MakeDirectory.
     * @param request MakeDirectoryRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and MakeDirectoryResponse
     */
    public makeDirectory(request: IMakeDirectoryRequest, callback: DeviceFilesystem.MakeDirectoryCallback): void;

    /**
     * Calls MakeDirectory.
     * @param request MakeDirectoryRequest message or plain object
     * @returns Promise
     */
    public makeDirectory(request: IMakeDirectoryRequest): Promise<MakeDirectoryResponse>;

    /**
     * Calls RemoveFile.
     * @param request RemoveFileRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and RemoveFileResponse
     */
    public removeFile(request: IRemoveFileRequest, callback: DeviceFilesystem.RemoveFileCallback): void;

    /**
     * Calls RemoveFile.
     * @param request RemoveFileRequest message or plain object
     * @returns Promise
     */
    public removeFile(request: IRemoveFileRequest): Promise<RemoveFileResponse>;

    /**
     * Calls RenameFile.
     * @param request RenameFileRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and RenameFileResponse
     */
    public renameFile(request: IRenameFileRequest, callback: DeviceFilesystem.RenameFileCallback): void;

    /**
     * Calls RenameFile.
     * @param request RenameFileRequest message or plain object
     * @returns Promise
     */
    public renameFile(request: IRenameFileRequest): Promise<RenameFileResponse>;

    /**
     * Calls PutFile.
     * @param request PutFileRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and PutFileResponse
     */
    public putFile(request: IPutFileRequest, callback: DeviceFilesystem.PutFileCallback): void;

    /**
     * Calls PutFile.
     * @param request PutFileRequest message or plain object
     * @returns Promise
     */
    public putFile(request: IPutFileRequest): Promise<PutFileResponse>;

    /**
     * Calls GetFile.
     * @param request GetFileRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and GetFileResponse
     */
    public getFile(request: IGetFileRequest, callback: DeviceFilesystem.GetFileCallback): void;

    /**
     * Calls GetFile.
     * @param request GetFileRequest message or plain object
     * @returns Promise
     */
    public getFile(request: IGetFileRequest): Promise<GetFileResponse>;

    /**
     * Calls BootFile.
     * @param request BootFileRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and BootFileResponse
     */
    public bootFile(request: IBootFileRequest, callback: DeviceFilesystem.BootFileCallback): void;

    /**
     * Calls BootFile.
     * @param request BootFileRequest message or plain object
     * @returns Promise
     */
    public bootFile(request: IBootFileRequest): Promise<BootFileResponse>;
}

export namespace DeviceFilesystem {

    /**
     * Callback as used by {@link DeviceFilesystem#readDirectory}.
     * @param error Error, if any
     * @param [response] ReadDirectoryResponse
     */
    type ReadDirectoryCallback = (error: (Error|null), response?: ReadDirectoryResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#makeDirectory}.
     * @param error Error, if any
     * @param [response] MakeDirectoryResponse
     */
    type MakeDirectoryCallback = (error: (Error|null), response?: MakeDirectoryResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#removeFile}.
     * @param error Error, if any
     * @param [response] RemoveFileResponse
     */
    type RemoveFileCallback = (error: (Error|null), response?: RemoveFileResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#renameFile}.
     * @param error Error, if any
     * @param [response] RenameFileResponse
     */
    type RenameFileCallback = (error: (Error|null), response?: RenameFileResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#putFile}.
     * @param error Error, if any
     * @param [response] PutFileResponse
     */
    type PutFileCallback = (error: (Error|null), response?: PutFileResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#getFile}.
     * @param error Error, if any
     * @param [response] GetFileResponse
     */
    type GetFileCallback = (error: (Error|null), response?: GetFileResponse) => void;

    /**
     * Callback as used by {@link DeviceFilesystem#bootFile}.
     * @param error Error, if any
     * @param [response] BootFileResponse
     */
    type BootFileCallback = (error: (Error|null), response?: BootFileResponse) => void;
}

/** Represents a DeviceInfo */
export class DeviceInfo extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceInfo service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceInfo service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceInfo;

    /**
     * Calls FetchFields.
     * @param request FieldsRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and FieldsResponse
     */
    public fetchFields(request: IFieldsRequest, callback: DeviceInfo.FetchFieldsCallback): void;

    /**
     * Calls FetchFields.
     * @param request FieldsRequest message or plain object
     * @returns Promise
     */
    public fetchFields(request: IFieldsRequest): Promise<FieldsResponse>;
}

export namespace DeviceInfo {

    /**
     * Callback as used by {@link DeviceInfo#fetchFields}.
     * @param error Error, if any
     * @param [response] FieldsResponse
     */
    type FetchFieldsCallback = (error: (Error|null), response?: FieldsResponse) => void;
}

/** Represents a DeviceNWA */
export class DeviceNWA extends $protobuf.rpc.Service {

    /**
     * Constructs a new DeviceNWA service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new DeviceNWA service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): DeviceNWA;

    /**
     * Calls NWACommand.
     * @param request NWACommandRequest message or plain object
     * @param callback Node-style callback called with the error, if any, and NWACommandResponse
     */
    public nWACommand(request: INWACommandRequest, callback: DeviceNWA.NWACommandCallback): void;

    /**
     * Calls NWACommand.
     * @param request NWACommandRequest message or plain object
     * @returns Promise
     */
    public nWACommand(request: INWACommandRequest): Promise<NWACommandResponse>;
}

export namespace DeviceNWA {

    /**
     * Callback as used by {@link DeviceNWA#nWACommand}.
     * @param error Error, if any
     * @param [response] NWACommandResponse
     */
    type NWACommandCallback = (error: (Error|null), response?: NWACommandResponse) => void;
}

/** AddressSpace enum. */
export enum AddressSpace {
    FxPakPro = 0,
    SnesABus = 1,
    Raw = 2
}

/** MemoryMapping enum. */
export enum MemoryMapping {
    Unknown = 0,
    HiROM = 1,
    LoROM = 2,
    ExHiROM = 3,
    SA1 = 4
}

/** DeviceCapability enum. */
export enum DeviceCapability {
    None = 0,
    ReadMemory = 1,
    WriteMemory = 2,
    ExecuteASM = 3,
    ResetSystem = 4,
    PauseUnpauseEmulation = 5,
    PauseToggleEmulation = 6,
    ResetToMenu = 7,
    FetchFields = 8,
    ReadDirectory = 10,
    MakeDirectory = 11,
    RemoveFile = 12,
    RenameFile = 13,
    PutFile = 14,
    GetFile = 15,
    BootFile = 16,
    NWACommand = 20
}

/** Field enum. */
export enum Field {
    DeviceName = 0,
    DeviceVersion = 1,
    DeviceStatus = 2,
    CoreName = 20,
    CoreVersion = 21,
    CorePlatform = 22,
    RomFileName = 40,
    RomHashType = 41,
    RomHashValue = 42
}

/** Represents a DevicesRequest. */
export class DevicesRequest implements IDevicesRequest {

    /**
     * Constructs a new DevicesRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevicesRequest);

    /** DevicesRequest kinds. */
    public kinds: string[];

    /**
     * Creates a new DevicesRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DevicesRequest instance
     */
    public static create(properties?: IDevicesRequest): DevicesRequest;

    /**
     * Encodes the specified DevicesRequest message. Does not implicitly {@link DevicesRequest.verify|verify} messages.
     * @param message DevicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDevicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DevicesRequest message, length delimited. Does not implicitly {@link DevicesRequest.verify|verify} messages.
     * @param message DevicesRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDevicesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DevicesRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DevicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DevicesRequest;

    /**
     * Decodes a DevicesRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DevicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DevicesRequest;

    /**
     * Verifies a DevicesRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DevicesRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DevicesRequest
     */
    public static fromObject(object: { [k: string]: any }): DevicesRequest;

    /**
     * Creates a plain object from a DevicesRequest message. Also converts values to other types if specified.
     * @param message DevicesRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DevicesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DevicesRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DevicesRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DevicesResponse. */
export class DevicesResponse implements IDevicesResponse {

    /**
     * Constructs a new DevicesResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDevicesResponse);

    /** DevicesResponse devices. */
    public devices: DevicesResponse.IDevice[];

    /**
     * Creates a new DevicesResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DevicesResponse instance
     */
    public static create(properties?: IDevicesResponse): DevicesResponse;

    /**
     * Encodes the specified DevicesResponse message. Does not implicitly {@link DevicesResponse.verify|verify} messages.
     * @param message DevicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDevicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DevicesResponse message, length delimited. Does not implicitly {@link DevicesResponse.verify|verify} messages.
     * @param message DevicesResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDevicesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DevicesResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DevicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DevicesResponse;

    /**
     * Decodes a DevicesResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DevicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DevicesResponse;

    /**
     * Verifies a DevicesResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DevicesResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DevicesResponse
     */
    public static fromObject(object: { [k: string]: any }): DevicesResponse;

    /**
     * Creates a plain object from a DevicesResponse message. Also converts values to other types if specified.
     * @param message DevicesResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DevicesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DevicesResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DevicesResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace DevicesResponse {

    /** Properties of a Device. */
    interface IDevice {

        /** Device uri */
        uri?: (string|null);

        /** Device displayName */
        displayName?: (string|null);

        /** Device kind */
        kind?: (string|null);

        /** Device capabilities */
        capabilities?: (DeviceCapability[]|null);

        /** Device defaultAddressSpace */
        defaultAddressSpace?: (AddressSpace|null);

        /** Device system */
        system?: (string|null);
    }

    /** Represents a Device. */
    class Device implements IDevice {

        /**
         * Constructs a new Device.
         * @param [properties] Properties to set
         */
        constructor(properties?: DevicesResponse.IDevice);

        /** Device uri. */
        public uri: string;

        /** Device displayName. */
        public displayName: string;

        /** Device kind. */
        public kind: string;

        /** Device capabilities. */
        public capabilities: DeviceCapability[];

        /** Device defaultAddressSpace. */
        public defaultAddressSpace: AddressSpace;

        /** Device system. */
        public system: string;

        /**
         * Creates a new Device instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Device instance
         */
        public static create(properties?: DevicesResponse.IDevice): DevicesResponse.Device;

        /**
         * Encodes the specified Device message. Does not implicitly {@link DevicesResponse.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: DevicesResponse.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link DevicesResponse.Device.verify|verify} messages.
         * @param message Device message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: DevicesResponse.IDevice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DevicesResponse.Device;

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DevicesResponse.Device;

        /**
         * Verifies a Device message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Device
         */
        public static fromObject(object: { [k: string]: any }): DevicesResponse.Device;

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @param message Device
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: DevicesResponse.Device, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Device to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for Device
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a ResetSystemRequest. */
export class ResetSystemRequest implements IResetSystemRequest {

    /**
     * Constructs a new ResetSystemRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetSystemRequest);

    /** ResetSystemRequest uri. */
    public uri: string;

    /**
     * Creates a new ResetSystemRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetSystemRequest instance
     */
    public static create(properties?: IResetSystemRequest): ResetSystemRequest;

    /**
     * Encodes the specified ResetSystemRequest message. Does not implicitly {@link ResetSystemRequest.verify|verify} messages.
     * @param message ResetSystemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetSystemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetSystemRequest message, length delimited. Does not implicitly {@link ResetSystemRequest.verify|verify} messages.
     * @param message ResetSystemRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetSystemRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetSystemRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetSystemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetSystemRequest;

    /**
     * Decodes a ResetSystemRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetSystemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetSystemRequest;

    /**
     * Verifies a ResetSystemRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetSystemRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetSystemRequest
     */
    public static fromObject(object: { [k: string]: any }): ResetSystemRequest;

    /**
     * Creates a plain object from a ResetSystemRequest message. Also converts values to other types if specified.
     * @param message ResetSystemRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetSystemRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetSystemRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResetSystemRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResetSystemResponse. */
export class ResetSystemResponse implements IResetSystemResponse {

    /**
     * Constructs a new ResetSystemResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetSystemResponse);

    /** ResetSystemResponse uri. */
    public uri: string;

    /**
     * Creates a new ResetSystemResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetSystemResponse instance
     */
    public static create(properties?: IResetSystemResponse): ResetSystemResponse;

    /**
     * Encodes the specified ResetSystemResponse message. Does not implicitly {@link ResetSystemResponse.verify|verify} messages.
     * @param message ResetSystemResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetSystemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetSystemResponse message, length delimited. Does not implicitly {@link ResetSystemResponse.verify|verify} messages.
     * @param message ResetSystemResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetSystemResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetSystemResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetSystemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetSystemResponse;

    /**
     * Decodes a ResetSystemResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetSystemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetSystemResponse;

    /**
     * Verifies a ResetSystemResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetSystemResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetSystemResponse
     */
    public static fromObject(object: { [k: string]: any }): ResetSystemResponse;

    /**
     * Creates a plain object from a ResetSystemResponse message. Also converts values to other types if specified.
     * @param message ResetSystemResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetSystemResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetSystemResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResetSystemResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResetToMenuRequest. */
export class ResetToMenuRequest implements IResetToMenuRequest {

    /**
     * Constructs a new ResetToMenuRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetToMenuRequest);

    /** ResetToMenuRequest uri. */
    public uri: string;

    /**
     * Creates a new ResetToMenuRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetToMenuRequest instance
     */
    public static create(properties?: IResetToMenuRequest): ResetToMenuRequest;

    /**
     * Encodes the specified ResetToMenuRequest message. Does not implicitly {@link ResetToMenuRequest.verify|verify} messages.
     * @param message ResetToMenuRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetToMenuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetToMenuRequest message, length delimited. Does not implicitly {@link ResetToMenuRequest.verify|verify} messages.
     * @param message ResetToMenuRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetToMenuRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetToMenuRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetToMenuRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetToMenuRequest;

    /**
     * Decodes a ResetToMenuRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetToMenuRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetToMenuRequest;

    /**
     * Verifies a ResetToMenuRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetToMenuRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetToMenuRequest
     */
    public static fromObject(object: { [k: string]: any }): ResetToMenuRequest;

    /**
     * Creates a plain object from a ResetToMenuRequest message. Also converts values to other types if specified.
     * @param message ResetToMenuRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetToMenuRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetToMenuRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResetToMenuRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ResetToMenuResponse. */
export class ResetToMenuResponse implements IResetToMenuResponse {

    /**
     * Constructs a new ResetToMenuResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IResetToMenuResponse);

    /** ResetToMenuResponse uri. */
    public uri: string;

    /**
     * Creates a new ResetToMenuResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ResetToMenuResponse instance
     */
    public static create(properties?: IResetToMenuResponse): ResetToMenuResponse;

    /**
     * Encodes the specified ResetToMenuResponse message. Does not implicitly {@link ResetToMenuResponse.verify|verify} messages.
     * @param message ResetToMenuResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IResetToMenuResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ResetToMenuResponse message, length delimited. Does not implicitly {@link ResetToMenuResponse.verify|verify} messages.
     * @param message ResetToMenuResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IResetToMenuResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ResetToMenuResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ResetToMenuResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ResetToMenuResponse;

    /**
     * Decodes a ResetToMenuResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ResetToMenuResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ResetToMenuResponse;

    /**
     * Verifies a ResetToMenuResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ResetToMenuResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ResetToMenuResponse
     */
    public static fromObject(object: { [k: string]: any }): ResetToMenuResponse;

    /**
     * Creates a plain object from a ResetToMenuResponse message. Also converts values to other types if specified.
     * @param message ResetToMenuResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ResetToMenuResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ResetToMenuResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ResetToMenuResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PauseEmulationRequest. */
export class PauseEmulationRequest implements IPauseEmulationRequest {

    /**
     * Constructs a new PauseEmulationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPauseEmulationRequest);

    /** PauseEmulationRequest uri. */
    public uri: string;

    /** PauseEmulationRequest paused. */
    public paused: boolean;

    /**
     * Creates a new PauseEmulationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PauseEmulationRequest instance
     */
    public static create(properties?: IPauseEmulationRequest): PauseEmulationRequest;

    /**
     * Encodes the specified PauseEmulationRequest message. Does not implicitly {@link PauseEmulationRequest.verify|verify} messages.
     * @param message PauseEmulationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPauseEmulationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PauseEmulationRequest message, length delimited. Does not implicitly {@link PauseEmulationRequest.verify|verify} messages.
     * @param message PauseEmulationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPauseEmulationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PauseEmulationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PauseEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PauseEmulationRequest;

    /**
     * Decodes a PauseEmulationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PauseEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PauseEmulationRequest;

    /**
     * Verifies a PauseEmulationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PauseEmulationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PauseEmulationRequest
     */
    public static fromObject(object: { [k: string]: any }): PauseEmulationRequest;

    /**
     * Creates a plain object from a PauseEmulationRequest message. Also converts values to other types if specified.
     * @param message PauseEmulationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PauseEmulationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PauseEmulationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PauseEmulationRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PauseEmulationResponse. */
export class PauseEmulationResponse implements IPauseEmulationResponse {

    /**
     * Constructs a new PauseEmulationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPauseEmulationResponse);

    /** PauseEmulationResponse uri. */
    public uri: string;

    /** PauseEmulationResponse paused. */
    public paused: boolean;

    /**
     * Creates a new PauseEmulationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PauseEmulationResponse instance
     */
    public static create(properties?: IPauseEmulationResponse): PauseEmulationResponse;

    /**
     * Encodes the specified PauseEmulationResponse message. Does not implicitly {@link PauseEmulationResponse.verify|verify} messages.
     * @param message PauseEmulationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPauseEmulationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PauseEmulationResponse message, length delimited. Does not implicitly {@link PauseEmulationResponse.verify|verify} messages.
     * @param message PauseEmulationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPauseEmulationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PauseEmulationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PauseEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PauseEmulationResponse;

    /**
     * Decodes a PauseEmulationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PauseEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PauseEmulationResponse;

    /**
     * Verifies a PauseEmulationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PauseEmulationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PauseEmulationResponse
     */
    public static fromObject(object: { [k: string]: any }): PauseEmulationResponse;

    /**
     * Creates a plain object from a PauseEmulationResponse message. Also converts values to other types if specified.
     * @param message PauseEmulationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PauseEmulationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PauseEmulationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PauseEmulationResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PauseToggleEmulationRequest. */
export class PauseToggleEmulationRequest implements IPauseToggleEmulationRequest {

    /**
     * Constructs a new PauseToggleEmulationRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPauseToggleEmulationRequest);

    /** PauseToggleEmulationRequest uri. */
    public uri: string;

    /**
     * Creates a new PauseToggleEmulationRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PauseToggleEmulationRequest instance
     */
    public static create(properties?: IPauseToggleEmulationRequest): PauseToggleEmulationRequest;

    /**
     * Encodes the specified PauseToggleEmulationRequest message. Does not implicitly {@link PauseToggleEmulationRequest.verify|verify} messages.
     * @param message PauseToggleEmulationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPauseToggleEmulationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PauseToggleEmulationRequest message, length delimited. Does not implicitly {@link PauseToggleEmulationRequest.verify|verify} messages.
     * @param message PauseToggleEmulationRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPauseToggleEmulationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PauseToggleEmulationRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PauseToggleEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PauseToggleEmulationRequest;

    /**
     * Decodes a PauseToggleEmulationRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PauseToggleEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PauseToggleEmulationRequest;

    /**
     * Verifies a PauseToggleEmulationRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PauseToggleEmulationRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PauseToggleEmulationRequest
     */
    public static fromObject(object: { [k: string]: any }): PauseToggleEmulationRequest;

    /**
     * Creates a plain object from a PauseToggleEmulationRequest message. Also converts values to other types if specified.
     * @param message PauseToggleEmulationRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PauseToggleEmulationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PauseToggleEmulationRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PauseToggleEmulationRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PauseToggleEmulationResponse. */
export class PauseToggleEmulationResponse implements IPauseToggleEmulationResponse {

    /**
     * Constructs a new PauseToggleEmulationResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPauseToggleEmulationResponse);

    /** PauseToggleEmulationResponse uri. */
    public uri: string;

    /**
     * Creates a new PauseToggleEmulationResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PauseToggleEmulationResponse instance
     */
    public static create(properties?: IPauseToggleEmulationResponse): PauseToggleEmulationResponse;

    /**
     * Encodes the specified PauseToggleEmulationResponse message. Does not implicitly {@link PauseToggleEmulationResponse.verify|verify} messages.
     * @param message PauseToggleEmulationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPauseToggleEmulationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PauseToggleEmulationResponse message, length delimited. Does not implicitly {@link PauseToggleEmulationResponse.verify|verify} messages.
     * @param message PauseToggleEmulationResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPauseToggleEmulationResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PauseToggleEmulationResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PauseToggleEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PauseToggleEmulationResponse;

    /**
     * Decodes a PauseToggleEmulationResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PauseToggleEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PauseToggleEmulationResponse;

    /**
     * Verifies a PauseToggleEmulationResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PauseToggleEmulationResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PauseToggleEmulationResponse
     */
    public static fromObject(object: { [k: string]: any }): PauseToggleEmulationResponse;

    /**
     * Creates a plain object from a PauseToggleEmulationResponse message. Also converts values to other types if specified.
     * @param message PauseToggleEmulationResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PauseToggleEmulationResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PauseToggleEmulationResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PauseToggleEmulationResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DetectMemoryMappingRequest. */
export class DetectMemoryMappingRequest implements IDetectMemoryMappingRequest {

    /**
     * Constructs a new DetectMemoryMappingRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDetectMemoryMappingRequest);

    /** DetectMemoryMappingRequest uri. */
    public uri: string;

    /** DetectMemoryMappingRequest fallbackMemoryMapping. */
    public fallbackMemoryMapping?: (MemoryMapping|null);

    /** DetectMemoryMappingRequest romHeader00FFB0. */
    public romHeader00FFB0?: (Uint8Array|null);

    /**
     * Creates a new DetectMemoryMappingRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DetectMemoryMappingRequest instance
     */
    public static create(properties?: IDetectMemoryMappingRequest): DetectMemoryMappingRequest;

    /**
     * Encodes the specified DetectMemoryMappingRequest message. Does not implicitly {@link DetectMemoryMappingRequest.verify|verify} messages.
     * @param message DetectMemoryMappingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDetectMemoryMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DetectMemoryMappingRequest message, length delimited. Does not implicitly {@link DetectMemoryMappingRequest.verify|verify} messages.
     * @param message DetectMemoryMappingRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDetectMemoryMappingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DetectMemoryMappingRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DetectMemoryMappingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DetectMemoryMappingRequest;

    /**
     * Decodes a DetectMemoryMappingRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DetectMemoryMappingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DetectMemoryMappingRequest;

    /**
     * Verifies a DetectMemoryMappingRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DetectMemoryMappingRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DetectMemoryMappingRequest
     */
    public static fromObject(object: { [k: string]: any }): DetectMemoryMappingRequest;

    /**
     * Creates a plain object from a DetectMemoryMappingRequest message. Also converts values to other types if specified.
     * @param message DetectMemoryMappingRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DetectMemoryMappingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DetectMemoryMappingRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DetectMemoryMappingRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a DetectMemoryMappingResponse. */
export class DetectMemoryMappingResponse implements IDetectMemoryMappingResponse {

    /**
     * Constructs a new DetectMemoryMappingResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDetectMemoryMappingResponse);

    /** DetectMemoryMappingResponse uri. */
    public uri: string;

    /** DetectMemoryMappingResponse memoryMapping. */
    public memoryMapping: MemoryMapping;

    /** DetectMemoryMappingResponse confidence. */
    public confidence: boolean;

    /** DetectMemoryMappingResponse romHeader00FFB0. */
    public romHeader00FFB0: Uint8Array;

    /**
     * Creates a new DetectMemoryMappingResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DetectMemoryMappingResponse instance
     */
    public static create(properties?: IDetectMemoryMappingResponse): DetectMemoryMappingResponse;

    /**
     * Encodes the specified DetectMemoryMappingResponse message. Does not implicitly {@link DetectMemoryMappingResponse.verify|verify} messages.
     * @param message DetectMemoryMappingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDetectMemoryMappingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DetectMemoryMappingResponse message, length delimited. Does not implicitly {@link DetectMemoryMappingResponse.verify|verify} messages.
     * @param message DetectMemoryMappingResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDetectMemoryMappingResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DetectMemoryMappingResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DetectMemoryMappingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DetectMemoryMappingResponse;

    /**
     * Decodes a DetectMemoryMappingResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DetectMemoryMappingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DetectMemoryMappingResponse;

    /**
     * Verifies a DetectMemoryMappingResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DetectMemoryMappingResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DetectMemoryMappingResponse
     */
    public static fromObject(object: { [k: string]: any }): DetectMemoryMappingResponse;

    /**
     * Creates a plain object from a DetectMemoryMappingResponse message. Also converts values to other types if specified.
     * @param message DetectMemoryMappingResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DetectMemoryMappingResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DetectMemoryMappingResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DetectMemoryMappingResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReadMemoryRequest. */
export class ReadMemoryRequest implements IReadMemoryRequest {

    /**
     * Constructs a new ReadMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadMemoryRequest);

    /** ReadMemoryRequest requestAddress. */
    public requestAddress: number;

    /** ReadMemoryRequest requestAddressSpace. */
    public requestAddressSpace: AddressSpace;

    /** ReadMemoryRequest requestMemoryMapping. */
    public requestMemoryMapping: MemoryMapping;

    /** ReadMemoryRequest size. */
    public size: number;

    /**
     * Creates a new ReadMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadMemoryRequest instance
     */
    public static create(properties?: IReadMemoryRequest): ReadMemoryRequest;

    /**
     * Encodes the specified ReadMemoryRequest message. Does not implicitly {@link ReadMemoryRequest.verify|verify} messages.
     * @param message ReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadMemoryRequest message, length delimited. Does not implicitly {@link ReadMemoryRequest.verify|verify} messages.
     * @param message ReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadMemoryRequest;

    /**
     * Decodes a ReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadMemoryRequest;

    /**
     * Verifies a ReadMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): ReadMemoryRequest;

    /**
     * Creates a plain object from a ReadMemoryRequest message. Also converts values to other types if specified.
     * @param message ReadMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReadMemoryResponse. */
export class ReadMemoryResponse implements IReadMemoryResponse {

    /**
     * Constructs a new ReadMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadMemoryResponse);

    /** ReadMemoryResponse requestAddress. */
    public requestAddress: number;

    /** ReadMemoryResponse requestAddressSpace. */
    public requestAddressSpace: AddressSpace;

    /** ReadMemoryResponse requestMemoryMapping. */
    public requestMemoryMapping: MemoryMapping;

    /** ReadMemoryResponse deviceAddress. */
    public deviceAddress: number;

    /** ReadMemoryResponse deviceAddressSpace. */
    public deviceAddressSpace: AddressSpace;

    /** ReadMemoryResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new ReadMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadMemoryResponse instance
     */
    public static create(properties?: IReadMemoryResponse): ReadMemoryResponse;

    /**
     * Encodes the specified ReadMemoryResponse message. Does not implicitly {@link ReadMemoryResponse.verify|verify} messages.
     * @param message ReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadMemoryResponse message, length delimited. Does not implicitly {@link ReadMemoryResponse.verify|verify} messages.
     * @param message ReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadMemoryResponse;

    /**
     * Decodes a ReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadMemoryResponse;

    /**
     * Verifies a ReadMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): ReadMemoryResponse;

    /**
     * Creates a plain object from a ReadMemoryResponse message. Also converts values to other types if specified.
     * @param message ReadMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a WriteMemoryRequest. */
export class WriteMemoryRequest implements IWriteMemoryRequest {

    /**
     * Constructs a new WriteMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWriteMemoryRequest);

    /** WriteMemoryRequest requestAddress. */
    public requestAddress: number;

    /** WriteMemoryRequest requestAddressSpace. */
    public requestAddressSpace: AddressSpace;

    /** WriteMemoryRequest requestMemoryMapping. */
    public requestMemoryMapping: MemoryMapping;

    /** WriteMemoryRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new WriteMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WriteMemoryRequest instance
     */
    public static create(properties?: IWriteMemoryRequest): WriteMemoryRequest;

    /**
     * Encodes the specified WriteMemoryRequest message. Does not implicitly {@link WriteMemoryRequest.verify|verify} messages.
     * @param message WriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WriteMemoryRequest message, length delimited. Does not implicitly {@link WriteMemoryRequest.verify|verify} messages.
     * @param message WriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WriteMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WriteMemoryRequest;

    /**
     * Decodes a WriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WriteMemoryRequest;

    /**
     * Verifies a WriteMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WriteMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): WriteMemoryRequest;

    /**
     * Creates a plain object from a WriteMemoryRequest message. Also converts values to other types if specified.
     * @param message WriteMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WriteMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WriteMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WriteMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a WriteMemoryResponse. */
export class WriteMemoryResponse implements IWriteMemoryResponse {

    /**
     * Constructs a new WriteMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IWriteMemoryResponse);

    /** WriteMemoryResponse requestAddress. */
    public requestAddress: number;

    /** WriteMemoryResponse requestAddressSpace. */
    public requestAddressSpace: AddressSpace;

    /** WriteMemoryResponse requestMemoryMapping. */
    public requestMemoryMapping: MemoryMapping;

    /** WriteMemoryResponse deviceAddress. */
    public deviceAddress: number;

    /** WriteMemoryResponse deviceAddressSpace. */
    public deviceAddressSpace: AddressSpace;

    /** WriteMemoryResponse size. */
    public size: number;

    /**
     * Creates a new WriteMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns WriteMemoryResponse instance
     */
    public static create(properties?: IWriteMemoryResponse): WriteMemoryResponse;

    /**
     * Encodes the specified WriteMemoryResponse message. Does not implicitly {@link WriteMemoryResponse.verify|verify} messages.
     * @param message WriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified WriteMemoryResponse message, length delimited. Does not implicitly {@link WriteMemoryResponse.verify|verify} messages.
     * @param message WriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a WriteMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns WriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): WriteMemoryResponse;

    /**
     * Decodes a WriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns WriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): WriteMemoryResponse;

    /**
     * Verifies a WriteMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a WriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns WriteMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): WriteMemoryResponse;

    /**
     * Creates a plain object from a WriteMemoryResponse message. Also converts values to other types if specified.
     * @param message WriteMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: WriteMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this WriteMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for WriteMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SingleReadMemoryRequest. */
export class SingleReadMemoryRequest implements ISingleReadMemoryRequest {

    /**
     * Constructs a new SingleReadMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISingleReadMemoryRequest);

    /** SingleReadMemoryRequest uri. */
    public uri: string;

    /** SingleReadMemoryRequest request. */
    public request?: (IReadMemoryRequest|null);

    /**
     * Creates a new SingleReadMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleReadMemoryRequest instance
     */
    public static create(properties?: ISingleReadMemoryRequest): SingleReadMemoryRequest;

    /**
     * Encodes the specified SingleReadMemoryRequest message. Does not implicitly {@link SingleReadMemoryRequest.verify|verify} messages.
     * @param message SingleReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISingleReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SingleReadMemoryRequest message, length delimited. Does not implicitly {@link SingleReadMemoryRequest.verify|verify} messages.
     * @param message SingleReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISingleReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleReadMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SingleReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SingleReadMemoryRequest;

    /**
     * Decodes a SingleReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SingleReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SingleReadMemoryRequest;

    /**
     * Verifies a SingleReadMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SingleReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SingleReadMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): SingleReadMemoryRequest;

    /**
     * Creates a plain object from a SingleReadMemoryRequest message. Also converts values to other types if specified.
     * @param message SingleReadMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SingleReadMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SingleReadMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SingleReadMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SingleReadMemoryResponse. */
export class SingleReadMemoryResponse implements ISingleReadMemoryResponse {

    /**
     * Constructs a new SingleReadMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISingleReadMemoryResponse);

    /** SingleReadMemoryResponse uri. */
    public uri: string;

    /** SingleReadMemoryResponse response. */
    public response?: (IReadMemoryResponse|null);

    /**
     * Creates a new SingleReadMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleReadMemoryResponse instance
     */
    public static create(properties?: ISingleReadMemoryResponse): SingleReadMemoryResponse;

    /**
     * Encodes the specified SingleReadMemoryResponse message. Does not implicitly {@link SingleReadMemoryResponse.verify|verify} messages.
     * @param message SingleReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISingleReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SingleReadMemoryResponse message, length delimited. Does not implicitly {@link SingleReadMemoryResponse.verify|verify} messages.
     * @param message SingleReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISingleReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleReadMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SingleReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SingleReadMemoryResponse;

    /**
     * Decodes a SingleReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SingleReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SingleReadMemoryResponse;

    /**
     * Verifies a SingleReadMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SingleReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SingleReadMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): SingleReadMemoryResponse;

    /**
     * Creates a plain object from a SingleReadMemoryResponse message. Also converts values to other types if specified.
     * @param message SingleReadMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SingleReadMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SingleReadMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SingleReadMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SingleWriteMemoryRequest. */
export class SingleWriteMemoryRequest implements ISingleWriteMemoryRequest {

    /**
     * Constructs a new SingleWriteMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISingleWriteMemoryRequest);

    /** SingleWriteMemoryRequest uri. */
    public uri: string;

    /** SingleWriteMemoryRequest request. */
    public request?: (IWriteMemoryRequest|null);

    /**
     * Creates a new SingleWriteMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleWriteMemoryRequest instance
     */
    public static create(properties?: ISingleWriteMemoryRequest): SingleWriteMemoryRequest;

    /**
     * Encodes the specified SingleWriteMemoryRequest message. Does not implicitly {@link SingleWriteMemoryRequest.verify|verify} messages.
     * @param message SingleWriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISingleWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SingleWriteMemoryRequest message, length delimited. Does not implicitly {@link SingleWriteMemoryRequest.verify|verify} messages.
     * @param message SingleWriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISingleWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleWriteMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SingleWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SingleWriteMemoryRequest;

    /**
     * Decodes a SingleWriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SingleWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SingleWriteMemoryRequest;

    /**
     * Verifies a SingleWriteMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SingleWriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SingleWriteMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): SingleWriteMemoryRequest;

    /**
     * Creates a plain object from a SingleWriteMemoryRequest message. Also converts values to other types if specified.
     * @param message SingleWriteMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SingleWriteMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SingleWriteMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SingleWriteMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SingleWriteMemoryResponse. */
export class SingleWriteMemoryResponse implements ISingleWriteMemoryResponse {

    /**
     * Constructs a new SingleWriteMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISingleWriteMemoryResponse);

    /** SingleWriteMemoryResponse uri. */
    public uri: string;

    /** SingleWriteMemoryResponse response. */
    public response?: (IWriteMemoryResponse|null);

    /**
     * Creates a new SingleWriteMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SingleWriteMemoryResponse instance
     */
    public static create(properties?: ISingleWriteMemoryResponse): SingleWriteMemoryResponse;

    /**
     * Encodes the specified SingleWriteMemoryResponse message. Does not implicitly {@link SingleWriteMemoryResponse.verify|verify} messages.
     * @param message SingleWriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISingleWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SingleWriteMemoryResponse message, length delimited. Does not implicitly {@link SingleWriteMemoryResponse.verify|verify} messages.
     * @param message SingleWriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISingleWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SingleWriteMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SingleWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SingleWriteMemoryResponse;

    /**
     * Decodes a SingleWriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SingleWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SingleWriteMemoryResponse;

    /**
     * Verifies a SingleWriteMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a SingleWriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SingleWriteMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): SingleWriteMemoryResponse;

    /**
     * Creates a plain object from a SingleWriteMemoryResponse message. Also converts values to other types if specified.
     * @param message SingleWriteMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SingleWriteMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SingleWriteMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for SingleWriteMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MultiReadMemoryRequest. */
export class MultiReadMemoryRequest implements IMultiReadMemoryRequest {

    /**
     * Constructs a new MultiReadMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultiReadMemoryRequest);

    /** MultiReadMemoryRequest uri. */
    public uri: string;

    /** MultiReadMemoryRequest requests. */
    public requests: IReadMemoryRequest[];

    /**
     * Creates a new MultiReadMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiReadMemoryRequest instance
     */
    public static create(properties?: IMultiReadMemoryRequest): MultiReadMemoryRequest;

    /**
     * Encodes the specified MultiReadMemoryRequest message. Does not implicitly {@link MultiReadMemoryRequest.verify|verify} messages.
     * @param message MultiReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultiReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiReadMemoryRequest message, length delimited. Does not implicitly {@link MultiReadMemoryRequest.verify|verify} messages.
     * @param message MultiReadMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultiReadMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiReadMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MultiReadMemoryRequest;

    /**
     * Decodes a MultiReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MultiReadMemoryRequest;

    /**
     * Verifies a MultiReadMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MultiReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiReadMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): MultiReadMemoryRequest;

    /**
     * Creates a plain object from a MultiReadMemoryRequest message. Also converts values to other types if specified.
     * @param message MultiReadMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MultiReadMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiReadMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MultiReadMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MultiReadMemoryResponse. */
export class MultiReadMemoryResponse implements IMultiReadMemoryResponse {

    /**
     * Constructs a new MultiReadMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultiReadMemoryResponse);

    /** MultiReadMemoryResponse uri. */
    public uri: string;

    /** MultiReadMemoryResponse responses. */
    public responses: IReadMemoryResponse[];

    /**
     * Creates a new MultiReadMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiReadMemoryResponse instance
     */
    public static create(properties?: IMultiReadMemoryResponse): MultiReadMemoryResponse;

    /**
     * Encodes the specified MultiReadMemoryResponse message. Does not implicitly {@link MultiReadMemoryResponse.verify|verify} messages.
     * @param message MultiReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultiReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiReadMemoryResponse message, length delimited. Does not implicitly {@link MultiReadMemoryResponse.verify|verify} messages.
     * @param message MultiReadMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultiReadMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiReadMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MultiReadMemoryResponse;

    /**
     * Decodes a MultiReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MultiReadMemoryResponse;

    /**
     * Verifies a MultiReadMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MultiReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiReadMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): MultiReadMemoryResponse;

    /**
     * Creates a plain object from a MultiReadMemoryResponse message. Also converts values to other types if specified.
     * @param message MultiReadMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MultiReadMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiReadMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MultiReadMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MultiWriteMemoryRequest. */
export class MultiWriteMemoryRequest implements IMultiWriteMemoryRequest {

    /**
     * Constructs a new MultiWriteMemoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultiWriteMemoryRequest);

    /** MultiWriteMemoryRequest uri. */
    public uri: string;

    /** MultiWriteMemoryRequest requests. */
    public requests: IWriteMemoryRequest[];

    /**
     * Creates a new MultiWriteMemoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiWriteMemoryRequest instance
     */
    public static create(properties?: IMultiWriteMemoryRequest): MultiWriteMemoryRequest;

    /**
     * Encodes the specified MultiWriteMemoryRequest message. Does not implicitly {@link MultiWriteMemoryRequest.verify|verify} messages.
     * @param message MultiWriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultiWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiWriteMemoryRequest message, length delimited. Does not implicitly {@link MultiWriteMemoryRequest.verify|verify} messages.
     * @param message MultiWriteMemoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultiWriteMemoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiWriteMemoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MultiWriteMemoryRequest;

    /**
     * Decodes a MultiWriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MultiWriteMemoryRequest;

    /**
     * Verifies a MultiWriteMemoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MultiWriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiWriteMemoryRequest
     */
    public static fromObject(object: { [k: string]: any }): MultiWriteMemoryRequest;

    /**
     * Creates a plain object from a MultiWriteMemoryRequest message. Also converts values to other types if specified.
     * @param message MultiWriteMemoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MultiWriteMemoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiWriteMemoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MultiWriteMemoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MultiWriteMemoryResponse. */
export class MultiWriteMemoryResponse implements IMultiWriteMemoryResponse {

    /**
     * Constructs a new MultiWriteMemoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMultiWriteMemoryResponse);

    /** MultiWriteMemoryResponse uri. */
    public uri: string;

    /** MultiWriteMemoryResponse responses. */
    public responses: IWriteMemoryResponse[];

    /**
     * Creates a new MultiWriteMemoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MultiWriteMemoryResponse instance
     */
    public static create(properties?: IMultiWriteMemoryResponse): MultiWriteMemoryResponse;

    /**
     * Encodes the specified MultiWriteMemoryResponse message. Does not implicitly {@link MultiWriteMemoryResponse.verify|verify} messages.
     * @param message MultiWriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMultiWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MultiWriteMemoryResponse message, length delimited. Does not implicitly {@link MultiWriteMemoryResponse.verify|verify} messages.
     * @param message MultiWriteMemoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMultiWriteMemoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MultiWriteMemoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MultiWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MultiWriteMemoryResponse;

    /**
     * Decodes a MultiWriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MultiWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MultiWriteMemoryResponse;

    /**
     * Verifies a MultiWriteMemoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MultiWriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MultiWriteMemoryResponse
     */
    public static fromObject(object: { [k: string]: any }): MultiWriteMemoryResponse;

    /**
     * Creates a plain object from a MultiWriteMemoryResponse message. Also converts values to other types if specified.
     * @param message MultiWriteMemoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MultiWriteMemoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MultiWriteMemoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MultiWriteMemoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReadDirectoryRequest. */
export class ReadDirectoryRequest implements IReadDirectoryRequest {

    /**
     * Constructs a new ReadDirectoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadDirectoryRequest);

    /** ReadDirectoryRequest uri. */
    public uri: string;

    /** ReadDirectoryRequest path. */
    public path: string;

    /**
     * Creates a new ReadDirectoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadDirectoryRequest instance
     */
    public static create(properties?: IReadDirectoryRequest): ReadDirectoryRequest;

    /**
     * Encodes the specified ReadDirectoryRequest message. Does not implicitly {@link ReadDirectoryRequest.verify|verify} messages.
     * @param message ReadDirectoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadDirectoryRequest message, length delimited. Does not implicitly {@link ReadDirectoryRequest.verify|verify} messages.
     * @param message ReadDirectoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadDirectoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadDirectoryRequest;

    /**
     * Decodes a ReadDirectoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadDirectoryRequest;

    /**
     * Verifies a ReadDirectoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadDirectoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadDirectoryRequest
     */
    public static fromObject(object: { [k: string]: any }): ReadDirectoryRequest;

    /**
     * Creates a plain object from a ReadDirectoryRequest message. Also converts values to other types if specified.
     * @param message ReadDirectoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadDirectoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadDirectoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** DirEntryType enum. */
export enum DirEntryType {
    Directory = 0,
    File = 1
}

/** Represents a DirEntry. */
export class DirEntry implements IDirEntry {

    /**
     * Constructs a new DirEntry.
     * @param [properties] Properties to set
     */
    constructor(properties?: IDirEntry);

    /** DirEntry name. */
    public name: string;

    /** DirEntry type. */
    public type: DirEntryType;

    /**
     * Creates a new DirEntry instance using the specified properties.
     * @param [properties] Properties to set
     * @returns DirEntry instance
     */
    public static create(properties?: IDirEntry): DirEntry;

    /**
     * Encodes the specified DirEntry message. Does not implicitly {@link DirEntry.verify|verify} messages.
     * @param message DirEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IDirEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified DirEntry message, length delimited. Does not implicitly {@link DirEntry.verify|verify} messages.
     * @param message DirEntry message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IDirEntry, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a DirEntry message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns DirEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): DirEntry;

    /**
     * Decodes a DirEntry message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns DirEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): DirEntry;

    /**
     * Verifies a DirEntry message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a DirEntry message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns DirEntry
     */
    public static fromObject(object: { [k: string]: any }): DirEntry;

    /**
     * Creates a plain object from a DirEntry message. Also converts values to other types if specified.
     * @param message DirEntry
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: DirEntry, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this DirEntry to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for DirEntry
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a ReadDirectoryResponse. */
export class ReadDirectoryResponse implements IReadDirectoryResponse {

    /**
     * Constructs a new ReadDirectoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReadDirectoryResponse);

    /** ReadDirectoryResponse uri. */
    public uri: string;

    /** ReadDirectoryResponse path. */
    public path: string;

    /** ReadDirectoryResponse entries. */
    public entries: IDirEntry[];

    /**
     * Creates a new ReadDirectoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ReadDirectoryResponse instance
     */
    public static create(properties?: IReadDirectoryResponse): ReadDirectoryResponse;

    /**
     * Encodes the specified ReadDirectoryResponse message. Does not implicitly {@link ReadDirectoryResponse.verify|verify} messages.
     * @param message ReadDirectoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReadDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ReadDirectoryResponse message, length delimited. Does not implicitly {@link ReadDirectoryResponse.verify|verify} messages.
     * @param message ReadDirectoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReadDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ReadDirectoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ReadDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ReadDirectoryResponse;

    /**
     * Decodes a ReadDirectoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ReadDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ReadDirectoryResponse;

    /**
     * Verifies a ReadDirectoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a ReadDirectoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ReadDirectoryResponse
     */
    public static fromObject(object: { [k: string]: any }): ReadDirectoryResponse;

    /**
     * Creates a plain object from a ReadDirectoryResponse message. Also converts values to other types if specified.
     * @param message ReadDirectoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ReadDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ReadDirectoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for ReadDirectoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MakeDirectoryRequest. */
export class MakeDirectoryRequest implements IMakeDirectoryRequest {

    /**
     * Constructs a new MakeDirectoryRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMakeDirectoryRequest);

    /** MakeDirectoryRequest uri. */
    public uri: string;

    /** MakeDirectoryRequest path. */
    public path: string;

    /**
     * Creates a new MakeDirectoryRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MakeDirectoryRequest instance
     */
    public static create(properties?: IMakeDirectoryRequest): MakeDirectoryRequest;

    /**
     * Encodes the specified MakeDirectoryRequest message. Does not implicitly {@link MakeDirectoryRequest.verify|verify} messages.
     * @param message MakeDirectoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MakeDirectoryRequest message, length delimited. Does not implicitly {@link MakeDirectoryRequest.verify|verify} messages.
     * @param message MakeDirectoryRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMakeDirectoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MakeDirectoryRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MakeDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MakeDirectoryRequest;

    /**
     * Decodes a MakeDirectoryRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MakeDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MakeDirectoryRequest;

    /**
     * Verifies a MakeDirectoryRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MakeDirectoryRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MakeDirectoryRequest
     */
    public static fromObject(object: { [k: string]: any }): MakeDirectoryRequest;

    /**
     * Creates a plain object from a MakeDirectoryRequest message. Also converts values to other types if specified.
     * @param message MakeDirectoryRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MakeDirectoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MakeDirectoryRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MakeDirectoryRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a MakeDirectoryResponse. */
export class MakeDirectoryResponse implements IMakeDirectoryResponse {

    /**
     * Constructs a new MakeDirectoryResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMakeDirectoryResponse);

    /** MakeDirectoryResponse uri. */
    public uri: string;

    /** MakeDirectoryResponse path. */
    public path: string;

    /**
     * Creates a new MakeDirectoryResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MakeDirectoryResponse instance
     */
    public static create(properties?: IMakeDirectoryResponse): MakeDirectoryResponse;

    /**
     * Encodes the specified MakeDirectoryResponse message. Does not implicitly {@link MakeDirectoryResponse.verify|verify} messages.
     * @param message MakeDirectoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MakeDirectoryResponse message, length delimited. Does not implicitly {@link MakeDirectoryResponse.verify|verify} messages.
     * @param message MakeDirectoryResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMakeDirectoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MakeDirectoryResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MakeDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MakeDirectoryResponse;

    /**
     * Decodes a MakeDirectoryResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MakeDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MakeDirectoryResponse;

    /**
     * Verifies a MakeDirectoryResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MakeDirectoryResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MakeDirectoryResponse
     */
    public static fromObject(object: { [k: string]: any }): MakeDirectoryResponse;

    /**
     * Creates a plain object from a MakeDirectoryResponse message. Also converts values to other types if specified.
     * @param message MakeDirectoryResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MakeDirectoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MakeDirectoryResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MakeDirectoryResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RemoveFileRequest. */
export class RemoveFileRequest implements IRemoveFileRequest {

    /**
     * Constructs a new RemoveFileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoveFileRequest);

    /** RemoveFileRequest uri. */
    public uri: string;

    /** RemoveFileRequest path. */
    public path: string;

    /**
     * Creates a new RemoveFileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveFileRequest instance
     */
    public static create(properties?: IRemoveFileRequest): RemoveFileRequest;

    /**
     * Encodes the specified RemoveFileRequest message. Does not implicitly {@link RemoveFileRequest.verify|verify} messages.
     * @param message RemoveFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveFileRequest message, length delimited. Does not implicitly {@link RemoveFileRequest.verify|verify} messages.
     * @param message RemoveFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoveFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveFileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoveFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveFileRequest;

    /**
     * Decodes a RemoveFileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoveFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveFileRequest;

    /**
     * Verifies a RemoveFileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoveFileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoveFileRequest
     */
    public static fromObject(object: { [k: string]: any }): RemoveFileRequest;

    /**
     * Creates a plain object from a RemoveFileRequest message. Also converts values to other types if specified.
     * @param message RemoveFileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoveFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveFileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RemoveFileRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RemoveFileResponse. */
export class RemoveFileResponse implements IRemoveFileResponse {

    /**
     * Constructs a new RemoveFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRemoveFileResponse);

    /** RemoveFileResponse uri. */
    public uri: string;

    /** RemoveFileResponse path. */
    public path: string;

    /**
     * Creates a new RemoveFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveFileResponse instance
     */
    public static create(properties?: IRemoveFileResponse): RemoveFileResponse;

    /**
     * Encodes the specified RemoveFileResponse message. Does not implicitly {@link RemoveFileResponse.verify|verify} messages.
     * @param message RemoveFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRemoveFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RemoveFileResponse message, length delimited. Does not implicitly {@link RemoveFileResponse.verify|verify} messages.
     * @param message RemoveFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRemoveFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RemoveFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RemoveFileResponse;

    /**
     * Decodes a RemoveFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RemoveFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RemoveFileResponse;

    /**
     * Verifies a RemoveFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RemoveFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RemoveFileResponse
     */
    public static fromObject(object: { [k: string]: any }): RemoveFileResponse;

    /**
     * Creates a plain object from a RemoveFileResponse message. Also converts values to other types if specified.
     * @param message RemoveFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RemoveFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RemoveFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RemoveFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RenameFileRequest. */
export class RenameFileRequest implements IRenameFileRequest {

    /**
     * Constructs a new RenameFileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRenameFileRequest);

    /** RenameFileRequest uri. */
    public uri: string;

    /** RenameFileRequest path. */
    public path: string;

    /** RenameFileRequest newFilename. */
    public newFilename: string;

    /**
     * Creates a new RenameFileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RenameFileRequest instance
     */
    public static create(properties?: IRenameFileRequest): RenameFileRequest;

    /**
     * Encodes the specified RenameFileRequest message. Does not implicitly {@link RenameFileRequest.verify|verify} messages.
     * @param message RenameFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRenameFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RenameFileRequest message, length delimited. Does not implicitly {@link RenameFileRequest.verify|verify} messages.
     * @param message RenameFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRenameFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RenameFileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RenameFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RenameFileRequest;

    /**
     * Decodes a RenameFileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RenameFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RenameFileRequest;

    /**
     * Verifies a RenameFileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RenameFileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RenameFileRequest
     */
    public static fromObject(object: { [k: string]: any }): RenameFileRequest;

    /**
     * Creates a plain object from a RenameFileRequest message. Also converts values to other types if specified.
     * @param message RenameFileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RenameFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RenameFileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RenameFileRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RenameFileResponse. */
export class RenameFileResponse implements IRenameFileResponse {

    /**
     * Constructs a new RenameFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRenameFileResponse);

    /** RenameFileResponse uri. */
    public uri: string;

    /** RenameFileResponse path. */
    public path: string;

    /** RenameFileResponse newFilename. */
    public newFilename: string;

    /**
     * Creates a new RenameFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RenameFileResponse instance
     */
    public static create(properties?: IRenameFileResponse): RenameFileResponse;

    /**
     * Encodes the specified RenameFileResponse message. Does not implicitly {@link RenameFileResponse.verify|verify} messages.
     * @param message RenameFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRenameFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RenameFileResponse message, length delimited. Does not implicitly {@link RenameFileResponse.verify|verify} messages.
     * @param message RenameFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRenameFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RenameFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RenameFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RenameFileResponse;

    /**
     * Decodes a RenameFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RenameFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RenameFileResponse;

    /**
     * Verifies a RenameFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RenameFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RenameFileResponse
     */
    public static fromObject(object: { [k: string]: any }): RenameFileResponse;

    /**
     * Creates a plain object from a RenameFileResponse message. Also converts values to other types if specified.
     * @param message RenameFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RenameFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RenameFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RenameFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PutFileRequest. */
export class PutFileRequest implements IPutFileRequest {

    /**
     * Constructs a new PutFileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPutFileRequest);

    /** PutFileRequest uri. */
    public uri: string;

    /** PutFileRequest path. */
    public path: string;

    /** PutFileRequest data. */
    public data: Uint8Array;

    /**
     * Creates a new PutFileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PutFileRequest instance
     */
    public static create(properties?: IPutFileRequest): PutFileRequest;

    /**
     * Encodes the specified PutFileRequest message. Does not implicitly {@link PutFileRequest.verify|verify} messages.
     * @param message PutFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPutFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PutFileRequest message, length delimited. Does not implicitly {@link PutFileRequest.verify|verify} messages.
     * @param message PutFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPutFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PutFileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PutFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutFileRequest;

    /**
     * Decodes a PutFileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PutFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutFileRequest;

    /**
     * Verifies a PutFileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PutFileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PutFileRequest
     */
    public static fromObject(object: { [k: string]: any }): PutFileRequest;

    /**
     * Creates a plain object from a PutFileRequest message. Also converts values to other types if specified.
     * @param message PutFileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PutFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PutFileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PutFileRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a PutFileResponse. */
export class PutFileResponse implements IPutFileResponse {

    /**
     * Constructs a new PutFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPutFileResponse);

    /** PutFileResponse uri. */
    public uri: string;

    /** PutFileResponse path. */
    public path: string;

    /** PutFileResponse size. */
    public size: number;

    /**
     * Creates a new PutFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PutFileResponse instance
     */
    public static create(properties?: IPutFileResponse): PutFileResponse;

    /**
     * Encodes the specified PutFileResponse message. Does not implicitly {@link PutFileResponse.verify|verify} messages.
     * @param message PutFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPutFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PutFileResponse message, length delimited. Does not implicitly {@link PutFileResponse.verify|verify} messages.
     * @param message PutFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPutFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PutFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PutFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PutFileResponse;

    /**
     * Decodes a PutFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PutFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PutFileResponse;

    /**
     * Verifies a PutFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a PutFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PutFileResponse
     */
    public static fromObject(object: { [k: string]: any }): PutFileResponse;

    /**
     * Creates a plain object from a PutFileResponse message. Also converts values to other types if specified.
     * @param message PutFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PutFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PutFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for PutFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GetFileRequest. */
export class GetFileRequest implements IGetFileRequest {

    /**
     * Constructs a new GetFileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetFileRequest);

    /** GetFileRequest uri. */
    public uri: string;

    /** GetFileRequest path. */
    public path: string;

    /**
     * Creates a new GetFileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetFileRequest instance
     */
    public static create(properties?: IGetFileRequest): GetFileRequest;

    /**
     * Encodes the specified GetFileRequest message. Does not implicitly {@link GetFileRequest.verify|verify} messages.
     * @param message GetFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetFileRequest message, length delimited. Does not implicitly {@link GetFileRequest.verify|verify} messages.
     * @param message GetFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetFileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetFileRequest;

    /**
     * Decodes a GetFileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetFileRequest;

    /**
     * Verifies a GetFileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetFileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetFileRequest
     */
    public static fromObject(object: { [k: string]: any }): GetFileRequest;

    /**
     * Creates a plain object from a GetFileRequest message. Also converts values to other types if specified.
     * @param message GetFileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetFileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetFileRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GetFileResponse. */
export class GetFileResponse implements IGetFileResponse {

    /**
     * Constructs a new GetFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGetFileResponse);

    /** GetFileResponse uri. */
    public uri: string;

    /** GetFileResponse path. */
    public path: string;

    /** GetFileResponse size. */
    public size: number;

    /** GetFileResponse data. */
    public data: Uint8Array;

    /**
     * Creates a new GetFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GetFileResponse instance
     */
    public static create(properties?: IGetFileResponse): GetFileResponse;

    /**
     * Encodes the specified GetFileResponse message. Does not implicitly {@link GetFileResponse.verify|verify} messages.
     * @param message GetFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGetFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GetFileResponse message, length delimited. Does not implicitly {@link GetFileResponse.verify|verify} messages.
     * @param message GetFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGetFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GetFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GetFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GetFileResponse;

    /**
     * Decodes a GetFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GetFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GetFileResponse;

    /**
     * Verifies a GetFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GetFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GetFileResponse
     */
    public static fromObject(object: { [k: string]: any }): GetFileResponse;

    /**
     * Creates a plain object from a GetFileResponse message. Also converts values to other types if specified.
     * @param message GetFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GetFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GetFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GetFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BootFileRequest. */
export class BootFileRequest implements IBootFileRequest {

    /**
     * Constructs a new BootFileRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBootFileRequest);

    /** BootFileRequest uri. */
    public uri: string;

    /** BootFileRequest path. */
    public path: string;

    /**
     * Creates a new BootFileRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BootFileRequest instance
     */
    public static create(properties?: IBootFileRequest): BootFileRequest;

    /**
     * Encodes the specified BootFileRequest message. Does not implicitly {@link BootFileRequest.verify|verify} messages.
     * @param message BootFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBootFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BootFileRequest message, length delimited. Does not implicitly {@link BootFileRequest.verify|verify} messages.
     * @param message BootFileRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBootFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BootFileRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BootFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BootFileRequest;

    /**
     * Decodes a BootFileRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BootFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BootFileRequest;

    /**
     * Verifies a BootFileRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BootFileRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BootFileRequest
     */
    public static fromObject(object: { [k: string]: any }): BootFileRequest;

    /**
     * Creates a plain object from a BootFileRequest message. Also converts values to other types if specified.
     * @param message BootFileRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BootFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BootFileRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BootFileRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a BootFileResponse. */
export class BootFileResponse implements IBootFileResponse {

    /**
     * Constructs a new BootFileResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IBootFileResponse);

    /** BootFileResponse uri. */
    public uri: string;

    /** BootFileResponse path. */
    public path: string;

    /**
     * Creates a new BootFileResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns BootFileResponse instance
     */
    public static create(properties?: IBootFileResponse): BootFileResponse;

    /**
     * Encodes the specified BootFileResponse message. Does not implicitly {@link BootFileResponse.verify|verify} messages.
     * @param message BootFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IBootFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified BootFileResponse message, length delimited. Does not implicitly {@link BootFileResponse.verify|verify} messages.
     * @param message BootFileResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IBootFileResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a BootFileResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns BootFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): BootFileResponse;

    /**
     * Decodes a BootFileResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns BootFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): BootFileResponse;

    /**
     * Verifies a BootFileResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a BootFileResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns BootFileResponse
     */
    public static fromObject(object: { [k: string]: any }): BootFileResponse;

    /**
     * Creates a plain object from a BootFileResponse message. Also converts values to other types if specified.
     * @param message BootFileResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: BootFileResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this BootFileResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for BootFileResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FieldsRequest. */
export class FieldsRequest implements IFieldsRequest {

    /**
     * Constructs a new FieldsRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFieldsRequest);

    /** FieldsRequest uri. */
    public uri: string;

    /** FieldsRequest fields. */
    public fields: Field[];

    /**
     * Creates a new FieldsRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FieldsRequest instance
     */
    public static create(properties?: IFieldsRequest): FieldsRequest;

    /**
     * Encodes the specified FieldsRequest message. Does not implicitly {@link FieldsRequest.verify|verify} messages.
     * @param message FieldsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FieldsRequest message, length delimited. Does not implicitly {@link FieldsRequest.verify|verify} messages.
     * @param message FieldsRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFieldsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FieldsRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FieldsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FieldsRequest;

    /**
     * Decodes a FieldsRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FieldsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FieldsRequest;

    /**
     * Verifies a FieldsRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FieldsRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FieldsRequest
     */
    public static fromObject(object: { [k: string]: any }): FieldsRequest;

    /**
     * Creates a plain object from a FieldsRequest message. Also converts values to other types if specified.
     * @param message FieldsRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FieldsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FieldsRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FieldsRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a FieldsResponse. */
export class FieldsResponse implements IFieldsResponse {

    /**
     * Constructs a new FieldsResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFieldsResponse);

    /** FieldsResponse uri. */
    public uri: string;

    /** FieldsResponse fields. */
    public fields: Field[];

    /** FieldsResponse values. */
    public values: string[];

    /**
     * Creates a new FieldsResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns FieldsResponse instance
     */
    public static create(properties?: IFieldsResponse): FieldsResponse;

    /**
     * Encodes the specified FieldsResponse message. Does not implicitly {@link FieldsResponse.verify|verify} messages.
     * @param message FieldsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified FieldsResponse message, length delimited. Does not implicitly {@link FieldsResponse.verify|verify} messages.
     * @param message FieldsResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IFieldsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a FieldsResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns FieldsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): FieldsResponse;

    /**
     * Decodes a FieldsResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns FieldsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): FieldsResponse;

    /**
     * Verifies a FieldsResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a FieldsResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns FieldsResponse
     */
    public static fromObject(object: { [k: string]: any }): FieldsResponse;

    /**
     * Creates a plain object from a FieldsResponse message. Also converts values to other types if specified.
     * @param message FieldsResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: FieldsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this FieldsResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for FieldsResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NWACommandRequest. */
export class NWACommandRequest implements INWACommandRequest {

    /**
     * Constructs a new NWACommandRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: INWACommandRequest);

    /** NWACommandRequest uri. */
    public uri: string;

    /** NWACommandRequest command. */
    public command: string;

    /** NWACommandRequest args. */
    public args: string;

    /** NWACommandRequest binaryArg. */
    public binaryArg?: (Uint8Array|null);

    /**
     * Creates a new NWACommandRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NWACommandRequest instance
     */
    public static create(properties?: INWACommandRequest): NWACommandRequest;

    /**
     * Encodes the specified NWACommandRequest message. Does not implicitly {@link NWACommandRequest.verify|verify} messages.
     * @param message NWACommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INWACommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NWACommandRequest message, length delimited. Does not implicitly {@link NWACommandRequest.verify|verify} messages.
     * @param message NWACommandRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INWACommandRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NWACommandRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NWACommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NWACommandRequest;

    /**
     * Decodes a NWACommandRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NWACommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NWACommandRequest;

    /**
     * Verifies a NWACommandRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NWACommandRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NWACommandRequest
     */
    public static fromObject(object: { [k: string]: any }): NWACommandRequest;

    /**
     * Creates a plain object from a NWACommandRequest message. Also converts values to other types if specified.
     * @param message NWACommandRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NWACommandRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NWACommandRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NWACommandRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a NWACommandResponse. */
export class NWACommandResponse implements INWACommandResponse {

    /**
     * Constructs a new NWACommandResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INWACommandResponse);

    /** NWACommandResponse uri. */
    public uri: string;

    /** NWACommandResponse asciiReply. */
    public asciiReply: NWACommandResponse.INWAASCIIItem[];

    /** NWACommandResponse binaryReplay. */
    public binaryReplay?: (Uint8Array|null);

    /**
     * Creates a new NWACommandResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NWACommandResponse instance
     */
    public static create(properties?: INWACommandResponse): NWACommandResponse;

    /**
     * Encodes the specified NWACommandResponse message. Does not implicitly {@link NWACommandResponse.verify|verify} messages.
     * @param message NWACommandResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INWACommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NWACommandResponse message, length delimited. Does not implicitly {@link NWACommandResponse.verify|verify} messages.
     * @param message NWACommandResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INWACommandResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NWACommandResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NWACommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NWACommandResponse;

    /**
     * Decodes a NWACommandResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NWACommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NWACommandResponse;

    /**
     * Verifies a NWACommandResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NWACommandResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NWACommandResponse
     */
    public static fromObject(object: { [k: string]: any }): NWACommandResponse;

    /**
     * Creates a plain object from a NWACommandResponse message. Also converts values to other types if specified.
     * @param message NWACommandResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NWACommandResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NWACommandResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NWACommandResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace NWACommandResponse {

    /** Properties of a NWAASCIIItem. */
    interface INWAASCIIItem {

        /** NWAASCIIItem item */
        item?: ({ [k: string]: string }|null);
    }

    /** Represents a NWAASCIIItem. */
    class NWAASCIIItem implements INWAASCIIItem {

        /**
         * Constructs a new NWAASCIIItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: NWACommandResponse.INWAASCIIItem);

        /** NWAASCIIItem item. */
        public item: { [k: string]: string };

        /**
         * Creates a new NWAASCIIItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NWAASCIIItem instance
         */
        public static create(properties?: NWACommandResponse.INWAASCIIItem): NWACommandResponse.NWAASCIIItem;

        /**
         * Encodes the specified NWAASCIIItem message. Does not implicitly {@link NWACommandResponse.NWAASCIIItem.verify|verify} messages.
         * @param message NWAASCIIItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: NWACommandResponse.INWAASCIIItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NWAASCIIItem message, length delimited. Does not implicitly {@link NWACommandResponse.NWAASCIIItem.verify|verify} messages.
         * @param message NWAASCIIItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: NWACommandResponse.INWAASCIIItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NWAASCIIItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NWAASCIIItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NWACommandResponse.NWAASCIIItem;

        /**
         * Decodes a NWAASCIIItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NWAASCIIItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NWACommandResponse.NWAASCIIItem;

        /**
         * Verifies a NWAASCIIItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NWAASCIIItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NWAASCIIItem
         */
        public static fromObject(object: { [k: string]: any }): NWACommandResponse.NWAASCIIItem;

        /**
         * Creates a plain object from a NWAASCIIItem message. Also converts values to other types if specified.
         * @param message NWAASCIIItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: NWACommandResponse.NWAASCIIItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NWAASCIIItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for NWAASCIIItem
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
