/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const Devices = $root.Devices = (() => {

    /**
     * Constructs a new Devices service.
     * @exports Devices
     * @classdesc Represents a Devices
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Devices(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Devices.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Devices;

    /**
     * Creates new Devices service using the specified rpc implementation.
     * @function create
     * @memberof Devices
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Devices} RPC service. Useful where requests and/or responses are streamed.
     */
    Devices.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Devices#listDevices}.
     * @memberof Devices
     * @typedef ListDevicesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DevicesResponse} [response] DevicesResponse
     */

    /**
     * Calls ListDevices.
     * @function listDevices
     * @memberof Devices
     * @instance
     * @param {IDevicesRequest} request DevicesRequest message or plain object
     * @param {Devices.ListDevicesCallback} callback Node-style callback called with the error, if any, and DevicesResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Devices.prototype.listDevices = function listDevices(request, callback) {
        return this.rpcCall(listDevices, $root.DevicesRequest, $root.DevicesResponse, request, callback);
    }, "name", { value: "ListDevices" });

    /**
     * Calls ListDevices.
     * @function listDevices
     * @memberof Devices
     * @instance
     * @param {IDevicesRequest} request DevicesRequest message or plain object
     * @returns {Promise<DevicesResponse>} Promise
     * @variation 2
     */

    return Devices;
})();

export const DeviceControl = $root.DeviceControl = (() => {

    /**
     * Constructs a new DeviceControl service.
     * @exports DeviceControl
     * @classdesc Represents a DeviceControl
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceControl(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceControl.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceControl;

    /**
     * Creates new DeviceControl service using the specified rpc implementation.
     * @function create
     * @memberof DeviceControl
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceControl} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceControl.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceControl#resetSystem}.
     * @memberof DeviceControl
     * @typedef ResetSystemCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ResetSystemResponse} [response] ResetSystemResponse
     */

    /**
     * Calls ResetSystem.
     * @function resetSystem
     * @memberof DeviceControl
     * @instance
     * @param {IResetSystemRequest} request ResetSystemRequest message or plain object
     * @param {DeviceControl.ResetSystemCallback} callback Node-style callback called with the error, if any, and ResetSystemResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceControl.prototype.resetSystem = function resetSystem(request, callback) {
        return this.rpcCall(resetSystem, $root.ResetSystemRequest, $root.ResetSystemResponse, request, callback);
    }, "name", { value: "ResetSystem" });

    /**
     * Calls ResetSystem.
     * @function resetSystem
     * @memberof DeviceControl
     * @instance
     * @param {IResetSystemRequest} request ResetSystemRequest message or plain object
     * @returns {Promise<ResetSystemResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceControl#resetToMenu}.
     * @memberof DeviceControl
     * @typedef ResetToMenuCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ResetToMenuResponse} [response] ResetToMenuResponse
     */

    /**
     * Calls ResetToMenu.
     * @function resetToMenu
     * @memberof DeviceControl
     * @instance
     * @param {IResetToMenuRequest} request ResetToMenuRequest message or plain object
     * @param {DeviceControl.ResetToMenuCallback} callback Node-style callback called with the error, if any, and ResetToMenuResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceControl.prototype.resetToMenu = function resetToMenu(request, callback) {
        return this.rpcCall(resetToMenu, $root.ResetToMenuRequest, $root.ResetToMenuResponse, request, callback);
    }, "name", { value: "ResetToMenu" });

    /**
     * Calls ResetToMenu.
     * @function resetToMenu
     * @memberof DeviceControl
     * @instance
     * @param {IResetToMenuRequest} request ResetToMenuRequest message or plain object
     * @returns {Promise<ResetToMenuResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceControl#pauseUnpauseEmulation}.
     * @memberof DeviceControl
     * @typedef PauseUnpauseEmulationCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PauseEmulationResponse} [response] PauseEmulationResponse
     */

    /**
     * Calls PauseUnpauseEmulation.
     * @function pauseUnpauseEmulation
     * @memberof DeviceControl
     * @instance
     * @param {IPauseEmulationRequest} request PauseEmulationRequest message or plain object
     * @param {DeviceControl.PauseUnpauseEmulationCallback} callback Node-style callback called with the error, if any, and PauseEmulationResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceControl.prototype.pauseUnpauseEmulation = function pauseUnpauseEmulation(request, callback) {
        return this.rpcCall(pauseUnpauseEmulation, $root.PauseEmulationRequest, $root.PauseEmulationResponse, request, callback);
    }, "name", { value: "PauseUnpauseEmulation" });

    /**
     * Calls PauseUnpauseEmulation.
     * @function pauseUnpauseEmulation
     * @memberof DeviceControl
     * @instance
     * @param {IPauseEmulationRequest} request PauseEmulationRequest message or plain object
     * @returns {Promise<PauseEmulationResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceControl#pauseToggleEmulation}.
     * @memberof DeviceControl
     * @typedef PauseToggleEmulationCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PauseToggleEmulationResponse} [response] PauseToggleEmulationResponse
     */

    /**
     * Calls PauseToggleEmulation.
     * @function pauseToggleEmulation
     * @memberof DeviceControl
     * @instance
     * @param {IPauseToggleEmulationRequest} request PauseToggleEmulationRequest message or plain object
     * @param {DeviceControl.PauseToggleEmulationCallback} callback Node-style callback called with the error, if any, and PauseToggleEmulationResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceControl.prototype.pauseToggleEmulation = function pauseToggleEmulation(request, callback) {
        return this.rpcCall(pauseToggleEmulation, $root.PauseToggleEmulationRequest, $root.PauseToggleEmulationResponse, request, callback);
    }, "name", { value: "PauseToggleEmulation" });

    /**
     * Calls PauseToggleEmulation.
     * @function pauseToggleEmulation
     * @memberof DeviceControl
     * @instance
     * @param {IPauseToggleEmulationRequest} request PauseToggleEmulationRequest message or plain object
     * @returns {Promise<PauseToggleEmulationResponse>} Promise
     * @variation 2
     */

    return DeviceControl;
})();

export const DeviceMemory = $root.DeviceMemory = (() => {

    /**
     * Constructs a new DeviceMemory service.
     * @exports DeviceMemory
     * @classdesc Represents a DeviceMemory
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceMemory(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceMemory.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceMemory;

    /**
     * Creates new DeviceMemory service using the specified rpc implementation.
     * @function create
     * @memberof DeviceMemory
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceMemory} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceMemory.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceMemory#mappingDetect}.
     * @memberof DeviceMemory
     * @typedef MappingDetectCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {DetectMemoryMappingResponse} [response] DetectMemoryMappingResponse
     */

    /**
     * Calls MappingDetect.
     * @function mappingDetect
     * @memberof DeviceMemory
     * @instance
     * @param {IDetectMemoryMappingRequest} request DetectMemoryMappingRequest message or plain object
     * @param {DeviceMemory.MappingDetectCallback} callback Node-style callback called with the error, if any, and DetectMemoryMappingResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.mappingDetect = function mappingDetect(request, callback) {
        return this.rpcCall(mappingDetect, $root.DetectMemoryMappingRequest, $root.DetectMemoryMappingResponse, request, callback);
    }, "name", { value: "MappingDetect" });

    /**
     * Calls MappingDetect.
     * @function mappingDetect
     * @memberof DeviceMemory
     * @instance
     * @param {IDetectMemoryMappingRequest} request DetectMemoryMappingRequest message or plain object
     * @returns {Promise<DetectMemoryMappingResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#singleRead}.
     * @memberof DeviceMemory
     * @typedef SingleReadCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {SingleReadMemoryResponse} [response] SingleReadMemoryResponse
     */

    /**
     * Calls SingleRead.
     * @function singleRead
     * @memberof DeviceMemory
     * @instance
     * @param {ISingleReadMemoryRequest} request SingleReadMemoryRequest message or plain object
     * @param {DeviceMemory.SingleReadCallback} callback Node-style callback called with the error, if any, and SingleReadMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.singleRead = function singleRead(request, callback) {
        return this.rpcCall(singleRead, $root.SingleReadMemoryRequest, $root.SingleReadMemoryResponse, request, callback);
    }, "name", { value: "SingleRead" });

    /**
     * Calls SingleRead.
     * @function singleRead
     * @memberof DeviceMemory
     * @instance
     * @param {ISingleReadMemoryRequest} request SingleReadMemoryRequest message or plain object
     * @returns {Promise<SingleReadMemoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#singleWrite}.
     * @memberof DeviceMemory
     * @typedef SingleWriteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {SingleWriteMemoryResponse} [response] SingleWriteMemoryResponse
     */

    /**
     * Calls SingleWrite.
     * @function singleWrite
     * @memberof DeviceMemory
     * @instance
     * @param {ISingleWriteMemoryRequest} request SingleWriteMemoryRequest message or plain object
     * @param {DeviceMemory.SingleWriteCallback} callback Node-style callback called with the error, if any, and SingleWriteMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.singleWrite = function singleWrite(request, callback) {
        return this.rpcCall(singleWrite, $root.SingleWriteMemoryRequest, $root.SingleWriteMemoryResponse, request, callback);
    }, "name", { value: "SingleWrite" });

    /**
     * Calls SingleWrite.
     * @function singleWrite
     * @memberof DeviceMemory
     * @instance
     * @param {ISingleWriteMemoryRequest} request SingleWriteMemoryRequest message or plain object
     * @returns {Promise<SingleWriteMemoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#multiRead}.
     * @memberof DeviceMemory
     * @typedef MultiReadCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MultiReadMemoryResponse} [response] MultiReadMemoryResponse
     */

    /**
     * Calls MultiRead.
     * @function multiRead
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiReadMemoryRequest} request MultiReadMemoryRequest message or plain object
     * @param {DeviceMemory.MultiReadCallback} callback Node-style callback called with the error, if any, and MultiReadMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.multiRead = function multiRead(request, callback) {
        return this.rpcCall(multiRead, $root.MultiReadMemoryRequest, $root.MultiReadMemoryResponse, request, callback);
    }, "name", { value: "MultiRead" });

    /**
     * Calls MultiRead.
     * @function multiRead
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiReadMemoryRequest} request MultiReadMemoryRequest message or plain object
     * @returns {Promise<MultiReadMemoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#multiWrite}.
     * @memberof DeviceMemory
     * @typedef MultiWriteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MultiWriteMemoryResponse} [response] MultiWriteMemoryResponse
     */

    /**
     * Calls MultiWrite.
     * @function multiWrite
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiWriteMemoryRequest} request MultiWriteMemoryRequest message or plain object
     * @param {DeviceMemory.MultiWriteCallback} callback Node-style callback called with the error, if any, and MultiWriteMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.multiWrite = function multiWrite(request, callback) {
        return this.rpcCall(multiWrite, $root.MultiWriteMemoryRequest, $root.MultiWriteMemoryResponse, request, callback);
    }, "name", { value: "MultiWrite" });

    /**
     * Calls MultiWrite.
     * @function multiWrite
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiWriteMemoryRequest} request MultiWriteMemoryRequest message or plain object
     * @returns {Promise<MultiWriteMemoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#streamRead}.
     * @memberof DeviceMemory
     * @typedef StreamReadCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MultiReadMemoryResponse} [response] MultiReadMemoryResponse
     */

    /**
     * Calls StreamRead.
     * @function streamRead
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiReadMemoryRequest} request MultiReadMemoryRequest message or plain object
     * @param {DeviceMemory.StreamReadCallback} callback Node-style callback called with the error, if any, and MultiReadMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.streamRead = function streamRead(request, callback) {
        return this.rpcCall(streamRead, $root.MultiReadMemoryRequest, $root.MultiReadMemoryResponse, request, callback);
    }, "name", { value: "StreamRead" });

    /**
     * Calls StreamRead.
     * @function streamRead
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiReadMemoryRequest} request MultiReadMemoryRequest message or plain object
     * @returns {Promise<MultiReadMemoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceMemory#streamWrite}.
     * @memberof DeviceMemory
     * @typedef StreamWriteCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MultiWriteMemoryResponse} [response] MultiWriteMemoryResponse
     */

    /**
     * Calls StreamWrite.
     * @function streamWrite
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiWriteMemoryRequest} request MultiWriteMemoryRequest message or plain object
     * @param {DeviceMemory.StreamWriteCallback} callback Node-style callback called with the error, if any, and MultiWriteMemoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceMemory.prototype.streamWrite = function streamWrite(request, callback) {
        return this.rpcCall(streamWrite, $root.MultiWriteMemoryRequest, $root.MultiWriteMemoryResponse, request, callback);
    }, "name", { value: "StreamWrite" });

    /**
     * Calls StreamWrite.
     * @function streamWrite
     * @memberof DeviceMemory
     * @instance
     * @param {IMultiWriteMemoryRequest} request MultiWriteMemoryRequest message or plain object
     * @returns {Promise<MultiWriteMemoryResponse>} Promise
     * @variation 2
     */

    return DeviceMemory;
})();

export const DeviceFilesystem = $root.DeviceFilesystem = (() => {

    /**
     * Constructs a new DeviceFilesystem service.
     * @exports DeviceFilesystem
     * @classdesc Represents a DeviceFilesystem
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceFilesystem(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceFilesystem.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceFilesystem;

    /**
     * Creates new DeviceFilesystem service using the specified rpc implementation.
     * @function create
     * @memberof DeviceFilesystem
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceFilesystem} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceFilesystem.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceFilesystem#readDirectory}.
     * @memberof DeviceFilesystem
     * @typedef ReadDirectoryCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {ReadDirectoryResponse} [response] ReadDirectoryResponse
     */

    /**
     * Calls ReadDirectory.
     * @function readDirectory
     * @memberof DeviceFilesystem
     * @instance
     * @param {IReadDirectoryRequest} request ReadDirectoryRequest message or plain object
     * @param {DeviceFilesystem.ReadDirectoryCallback} callback Node-style callback called with the error, if any, and ReadDirectoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.readDirectory = function readDirectory(request, callback) {
        return this.rpcCall(readDirectory, $root.ReadDirectoryRequest, $root.ReadDirectoryResponse, request, callback);
    }, "name", { value: "ReadDirectory" });

    /**
     * Calls ReadDirectory.
     * @function readDirectory
     * @memberof DeviceFilesystem
     * @instance
     * @param {IReadDirectoryRequest} request ReadDirectoryRequest message or plain object
     * @returns {Promise<ReadDirectoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#makeDirectory}.
     * @memberof DeviceFilesystem
     * @typedef MakeDirectoryCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {MakeDirectoryResponse} [response] MakeDirectoryResponse
     */

    /**
     * Calls MakeDirectory.
     * @function makeDirectory
     * @memberof DeviceFilesystem
     * @instance
     * @param {IMakeDirectoryRequest} request MakeDirectoryRequest message or plain object
     * @param {DeviceFilesystem.MakeDirectoryCallback} callback Node-style callback called with the error, if any, and MakeDirectoryResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.makeDirectory = function makeDirectory(request, callback) {
        return this.rpcCall(makeDirectory, $root.MakeDirectoryRequest, $root.MakeDirectoryResponse, request, callback);
    }, "name", { value: "MakeDirectory" });

    /**
     * Calls MakeDirectory.
     * @function makeDirectory
     * @memberof DeviceFilesystem
     * @instance
     * @param {IMakeDirectoryRequest} request MakeDirectoryRequest message or plain object
     * @returns {Promise<MakeDirectoryResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#removeFile}.
     * @memberof DeviceFilesystem
     * @typedef RemoveFileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {RemoveFileResponse} [response] RemoveFileResponse
     */

    /**
     * Calls RemoveFile.
     * @function removeFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IRemoveFileRequest} request RemoveFileRequest message or plain object
     * @param {DeviceFilesystem.RemoveFileCallback} callback Node-style callback called with the error, if any, and RemoveFileResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.removeFile = function removeFile(request, callback) {
        return this.rpcCall(removeFile, $root.RemoveFileRequest, $root.RemoveFileResponse, request, callback);
    }, "name", { value: "RemoveFile" });

    /**
     * Calls RemoveFile.
     * @function removeFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IRemoveFileRequest} request RemoveFileRequest message or plain object
     * @returns {Promise<RemoveFileResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#renameFile}.
     * @memberof DeviceFilesystem
     * @typedef RenameFileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {RenameFileResponse} [response] RenameFileResponse
     */

    /**
     * Calls RenameFile.
     * @function renameFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IRenameFileRequest} request RenameFileRequest message or plain object
     * @param {DeviceFilesystem.RenameFileCallback} callback Node-style callback called with the error, if any, and RenameFileResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.renameFile = function renameFile(request, callback) {
        return this.rpcCall(renameFile, $root.RenameFileRequest, $root.RenameFileResponse, request, callback);
    }, "name", { value: "RenameFile" });

    /**
     * Calls RenameFile.
     * @function renameFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IRenameFileRequest} request RenameFileRequest message or plain object
     * @returns {Promise<RenameFileResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#putFile}.
     * @memberof DeviceFilesystem
     * @typedef PutFileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {PutFileResponse} [response] PutFileResponse
     */

    /**
     * Calls PutFile.
     * @function putFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IPutFileRequest} request PutFileRequest message or plain object
     * @param {DeviceFilesystem.PutFileCallback} callback Node-style callback called with the error, if any, and PutFileResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.putFile = function putFile(request, callback) {
        return this.rpcCall(putFile, $root.PutFileRequest, $root.PutFileResponse, request, callback);
    }, "name", { value: "PutFile" });

    /**
     * Calls PutFile.
     * @function putFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IPutFileRequest} request PutFileRequest message or plain object
     * @returns {Promise<PutFileResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#getFile}.
     * @memberof DeviceFilesystem
     * @typedef GetFileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {GetFileResponse} [response] GetFileResponse
     */

    /**
     * Calls GetFile.
     * @function getFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IGetFileRequest} request GetFileRequest message or plain object
     * @param {DeviceFilesystem.GetFileCallback} callback Node-style callback called with the error, if any, and GetFileResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.getFile = function getFile(request, callback) {
        return this.rpcCall(getFile, $root.GetFileRequest, $root.GetFileResponse, request, callback);
    }, "name", { value: "GetFile" });

    /**
     * Calls GetFile.
     * @function getFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IGetFileRequest} request GetFileRequest message or plain object
     * @returns {Promise<GetFileResponse>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link DeviceFilesystem#bootFile}.
     * @memberof DeviceFilesystem
     * @typedef BootFileCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {BootFileResponse} [response] BootFileResponse
     */

    /**
     * Calls BootFile.
     * @function bootFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IBootFileRequest} request BootFileRequest message or plain object
     * @param {DeviceFilesystem.BootFileCallback} callback Node-style callback called with the error, if any, and BootFileResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceFilesystem.prototype.bootFile = function bootFile(request, callback) {
        return this.rpcCall(bootFile, $root.BootFileRequest, $root.BootFileResponse, request, callback);
    }, "name", { value: "BootFile" });

    /**
     * Calls BootFile.
     * @function bootFile
     * @memberof DeviceFilesystem
     * @instance
     * @param {IBootFileRequest} request BootFileRequest message or plain object
     * @returns {Promise<BootFileResponse>} Promise
     * @variation 2
     */

    return DeviceFilesystem;
})();

export const DeviceInfo = $root.DeviceInfo = (() => {

    /**
     * Constructs a new DeviceInfo service.
     * @exports DeviceInfo
     * @classdesc Represents a DeviceInfo
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceInfo(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceInfo.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceInfo;

    /**
     * Creates new DeviceInfo service using the specified rpc implementation.
     * @function create
     * @memberof DeviceInfo
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceInfo} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceInfo.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceInfo#fetchFields}.
     * @memberof DeviceInfo
     * @typedef FetchFieldsCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {FieldsResponse} [response] FieldsResponse
     */

    /**
     * Calls FetchFields.
     * @function fetchFields
     * @memberof DeviceInfo
     * @instance
     * @param {IFieldsRequest} request FieldsRequest message or plain object
     * @param {DeviceInfo.FetchFieldsCallback} callback Node-style callback called with the error, if any, and FieldsResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceInfo.prototype.fetchFields = function fetchFields(request, callback) {
        return this.rpcCall(fetchFields, $root.FieldsRequest, $root.FieldsResponse, request, callback);
    }, "name", { value: "FetchFields" });

    /**
     * Calls FetchFields.
     * @function fetchFields
     * @memberof DeviceInfo
     * @instance
     * @param {IFieldsRequest} request FieldsRequest message or plain object
     * @returns {Promise<FieldsResponse>} Promise
     * @variation 2
     */

    return DeviceInfo;
})();

export const DeviceNWA = $root.DeviceNWA = (() => {

    /**
     * Constructs a new DeviceNWA service.
     * @exports DeviceNWA
     * @classdesc Represents a DeviceNWA
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function DeviceNWA(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (DeviceNWA.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = DeviceNWA;

    /**
     * Creates new DeviceNWA service using the specified rpc implementation.
     * @function create
     * @memberof DeviceNWA
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {DeviceNWA} RPC service. Useful where requests and/or responses are streamed.
     */
    DeviceNWA.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link DeviceNWA#nWACommand}.
     * @memberof DeviceNWA
     * @typedef NWACommandCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {NWACommandResponse} [response] NWACommandResponse
     */

    /**
     * Calls NWACommand.
     * @function nWACommand
     * @memberof DeviceNWA
     * @instance
     * @param {INWACommandRequest} request NWACommandRequest message or plain object
     * @param {DeviceNWA.NWACommandCallback} callback Node-style callback called with the error, if any, and NWACommandResponse
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(DeviceNWA.prototype.nWACommand = function nWACommand(request, callback) {
        return this.rpcCall(nWACommand, $root.NWACommandRequest, $root.NWACommandResponse, request, callback);
    }, "name", { value: "NWACommand" });

    /**
     * Calls NWACommand.
     * @function nWACommand
     * @memberof DeviceNWA
     * @instance
     * @param {INWACommandRequest} request NWACommandRequest message or plain object
     * @returns {Promise<NWACommandResponse>} Promise
     * @variation 2
     */

    return DeviceNWA;
})();

/**
 * AddressSpace enum.
 * @exports AddressSpace
 * @enum {number}
 * @property {number} FxPakPro=0 FxPakPro value
 * @property {number} SnesABus=1 SnesABus value
 * @property {number} Raw=2 Raw value
 */
export const AddressSpace = $root.AddressSpace = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "FxPakPro"] = 0;
    values[valuesById[1] = "SnesABus"] = 1;
    values[valuesById[2] = "Raw"] = 2;
    return values;
})();

/**
 * MemoryMapping enum.
 * @exports MemoryMapping
 * @enum {number}
 * @property {number} Unknown=0 Unknown value
 * @property {number} HiROM=1 HiROM value
 * @property {number} LoROM=2 LoROM value
 * @property {number} ExHiROM=3 ExHiROM value
 * @property {number} SA1=4 SA1 value
 */
export const MemoryMapping = $root.MemoryMapping = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Unknown"] = 0;
    values[valuesById[1] = "HiROM"] = 1;
    values[valuesById[2] = "LoROM"] = 2;
    values[valuesById[3] = "ExHiROM"] = 3;
    values[valuesById[4] = "SA1"] = 4;
    return values;
})();

/**
 * DeviceCapability enum.
 * @exports DeviceCapability
 * @enum {number}
 * @property {number} None=0 None value
 * @property {number} ReadMemory=1 ReadMemory value
 * @property {number} WriteMemory=2 WriteMemory value
 * @property {number} ExecuteASM=3 ExecuteASM value
 * @property {number} ResetSystem=4 ResetSystem value
 * @property {number} PauseUnpauseEmulation=5 PauseUnpauseEmulation value
 * @property {number} PauseToggleEmulation=6 PauseToggleEmulation value
 * @property {number} ResetToMenu=7 ResetToMenu value
 * @property {number} FetchFields=8 FetchFields value
 * @property {number} ReadDirectory=10 ReadDirectory value
 * @property {number} MakeDirectory=11 MakeDirectory value
 * @property {number} RemoveFile=12 RemoveFile value
 * @property {number} RenameFile=13 RenameFile value
 * @property {number} PutFile=14 PutFile value
 * @property {number} GetFile=15 GetFile value
 * @property {number} BootFile=16 BootFile value
 * @property {number} NWACommand=20 NWACommand value
 */
export const DeviceCapability = $root.DeviceCapability = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "None"] = 0;
    values[valuesById[1] = "ReadMemory"] = 1;
    values[valuesById[2] = "WriteMemory"] = 2;
    values[valuesById[3] = "ExecuteASM"] = 3;
    values[valuesById[4] = "ResetSystem"] = 4;
    values[valuesById[5] = "PauseUnpauseEmulation"] = 5;
    values[valuesById[6] = "PauseToggleEmulation"] = 6;
    values[valuesById[7] = "ResetToMenu"] = 7;
    values[valuesById[8] = "FetchFields"] = 8;
    values[valuesById[10] = "ReadDirectory"] = 10;
    values[valuesById[11] = "MakeDirectory"] = 11;
    values[valuesById[12] = "RemoveFile"] = 12;
    values[valuesById[13] = "RenameFile"] = 13;
    values[valuesById[14] = "PutFile"] = 14;
    values[valuesById[15] = "GetFile"] = 15;
    values[valuesById[16] = "BootFile"] = 16;
    values[valuesById[20] = "NWACommand"] = 20;
    return values;
})();

/**
 * Field enum.
 * @exports Field
 * @enum {number}
 * @property {number} DeviceName=0 DeviceName value
 * @property {number} DeviceVersion=1 DeviceVersion value
 * @property {number} DeviceStatus=2 DeviceStatus value
 * @property {number} CoreName=20 CoreName value
 * @property {number} CoreVersion=21 CoreVersion value
 * @property {number} CorePlatform=22 CorePlatform value
 * @property {number} RomFileName=40 RomFileName value
 * @property {number} RomHashType=41 RomHashType value
 * @property {number} RomHashValue=42 RomHashValue value
 */
export const Field = $root.Field = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "DeviceName"] = 0;
    values[valuesById[1] = "DeviceVersion"] = 1;
    values[valuesById[2] = "DeviceStatus"] = 2;
    values[valuesById[20] = "CoreName"] = 20;
    values[valuesById[21] = "CoreVersion"] = 21;
    values[valuesById[22] = "CorePlatform"] = 22;
    values[valuesById[40] = "RomFileName"] = 40;
    values[valuesById[41] = "RomHashType"] = 41;
    values[valuesById[42] = "RomHashValue"] = 42;
    return values;
})();

export const DevicesRequest = $root.DevicesRequest = (() => {

    /**
     * Properties of a DevicesRequest.
     * @exports IDevicesRequest
     * @interface IDevicesRequest
     * @property {Array.<string>|null} [kinds] DevicesRequest kinds
     */

    /**
     * Constructs a new DevicesRequest.
     * @exports DevicesRequest
     * @classdesc Represents a DevicesRequest.
     * @implements IDevicesRequest
     * @constructor
     * @param {IDevicesRequest=} [properties] Properties to set
     */
    function DevicesRequest(properties) {
        this.kinds = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DevicesRequest kinds.
     * @member {Array.<string>} kinds
     * @memberof DevicesRequest
     * @instance
     */
    DevicesRequest.prototype.kinds = $util.emptyArray;

    /**
     * Creates a new DevicesRequest instance using the specified properties.
     * @function create
     * @memberof DevicesRequest
     * @static
     * @param {IDevicesRequest=} [properties] Properties to set
     * @returns {DevicesRequest} DevicesRequest instance
     */
    DevicesRequest.create = function create(properties) {
        return new DevicesRequest(properties);
    };

    /**
     * Encodes the specified DevicesRequest message. Does not implicitly {@link DevicesRequest.verify|verify} messages.
     * @function encode
     * @memberof DevicesRequest
     * @static
     * @param {IDevicesRequest} message DevicesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DevicesRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.kinds != null && message.kinds.length)
            for (let i = 0; i < message.kinds.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.kinds[i]);
        return writer;
    };

    /**
     * Encodes the specified DevicesRequest message, length delimited. Does not implicitly {@link DevicesRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DevicesRequest
     * @static
     * @param {IDevicesRequest} message DevicesRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DevicesRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DevicesRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DevicesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DevicesRequest} DevicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DevicesRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DevicesRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.kinds && message.kinds.length))
                        message.kinds = [];
                    message.kinds.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DevicesRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DevicesRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DevicesRequest} DevicesRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DevicesRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DevicesRequest message.
     * @function verify
     * @memberof DevicesRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DevicesRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.kinds != null && message.hasOwnProperty("kinds")) {
            if (!Array.isArray(message.kinds))
                return "kinds: array expected";
            for (let i = 0; i < message.kinds.length; ++i)
                if (!$util.isString(message.kinds[i]))
                    return "kinds: string[] expected";
        }
        return null;
    };

    /**
     * Creates a DevicesRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DevicesRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DevicesRequest} DevicesRequest
     */
    DevicesRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.DevicesRequest)
            return object;
        let message = new $root.DevicesRequest();
        if (object.kinds) {
            if (!Array.isArray(object.kinds))
                throw TypeError(".DevicesRequest.kinds: array expected");
            message.kinds = [];
            for (let i = 0; i < object.kinds.length; ++i)
                message.kinds[i] = String(object.kinds[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a DevicesRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DevicesRequest
     * @static
     * @param {DevicesRequest} message DevicesRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DevicesRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.kinds = [];
        if (message.kinds && message.kinds.length) {
            object.kinds = [];
            for (let j = 0; j < message.kinds.length; ++j)
                object.kinds[j] = message.kinds[j];
        }
        return object;
    };

    /**
     * Converts this DevicesRequest to JSON.
     * @function toJSON
     * @memberof DevicesRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DevicesRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DevicesRequest
     * @function getTypeUrl
     * @memberof DevicesRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DevicesRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DevicesRequest";
    };

    return DevicesRequest;
})();

export const DevicesResponse = $root.DevicesResponse = (() => {

    /**
     * Properties of a DevicesResponse.
     * @exports IDevicesResponse
     * @interface IDevicesResponse
     * @property {Array.<DevicesResponse.IDevice>|null} [devices] DevicesResponse devices
     */

    /**
     * Constructs a new DevicesResponse.
     * @exports DevicesResponse
     * @classdesc Represents a DevicesResponse.
     * @implements IDevicesResponse
     * @constructor
     * @param {IDevicesResponse=} [properties] Properties to set
     */
    function DevicesResponse(properties) {
        this.devices = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DevicesResponse devices.
     * @member {Array.<DevicesResponse.IDevice>} devices
     * @memberof DevicesResponse
     * @instance
     */
    DevicesResponse.prototype.devices = $util.emptyArray;

    /**
     * Creates a new DevicesResponse instance using the specified properties.
     * @function create
     * @memberof DevicesResponse
     * @static
     * @param {IDevicesResponse=} [properties] Properties to set
     * @returns {DevicesResponse} DevicesResponse instance
     */
    DevicesResponse.create = function create(properties) {
        return new DevicesResponse(properties);
    };

    /**
     * Encodes the specified DevicesResponse message. Does not implicitly {@link DevicesResponse.verify|verify} messages.
     * @function encode
     * @memberof DevicesResponse
     * @static
     * @param {IDevicesResponse} message DevicesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DevicesResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.devices != null && message.devices.length)
            for (let i = 0; i < message.devices.length; ++i)
                $root.DevicesResponse.Device.encode(message.devices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified DevicesResponse message, length delimited. Does not implicitly {@link DevicesResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DevicesResponse
     * @static
     * @param {IDevicesResponse} message DevicesResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DevicesResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DevicesResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DevicesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DevicesResponse} DevicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DevicesResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DevicesResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.devices && message.devices.length))
                        message.devices = [];
                    message.devices.push($root.DevicesResponse.Device.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DevicesResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DevicesResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DevicesResponse} DevicesResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DevicesResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DevicesResponse message.
     * @function verify
     * @memberof DevicesResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DevicesResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.devices != null && message.hasOwnProperty("devices")) {
            if (!Array.isArray(message.devices))
                return "devices: array expected";
            for (let i = 0; i < message.devices.length; ++i) {
                let error = $root.DevicesResponse.Device.verify(message.devices[i]);
                if (error)
                    return "devices." + error;
            }
        }
        return null;
    };

    /**
     * Creates a DevicesResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DevicesResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DevicesResponse} DevicesResponse
     */
    DevicesResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.DevicesResponse)
            return object;
        let message = new $root.DevicesResponse();
        if (object.devices) {
            if (!Array.isArray(object.devices))
                throw TypeError(".DevicesResponse.devices: array expected");
            message.devices = [];
            for (let i = 0; i < object.devices.length; ++i) {
                if (typeof object.devices[i] !== "object")
                    throw TypeError(".DevicesResponse.devices: object expected");
                message.devices[i] = $root.DevicesResponse.Device.fromObject(object.devices[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a DevicesResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DevicesResponse
     * @static
     * @param {DevicesResponse} message DevicesResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DevicesResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.devices = [];
        if (message.devices && message.devices.length) {
            object.devices = [];
            for (let j = 0; j < message.devices.length; ++j)
                object.devices[j] = $root.DevicesResponse.Device.toObject(message.devices[j], options);
        }
        return object;
    };

    /**
     * Converts this DevicesResponse to JSON.
     * @function toJSON
     * @memberof DevicesResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DevicesResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DevicesResponse
     * @function getTypeUrl
     * @memberof DevicesResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DevicesResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DevicesResponse";
    };

    DevicesResponse.Device = (function() {

        /**
         * Properties of a Device.
         * @memberof DevicesResponse
         * @interface IDevice
         * @property {string|null} [uri] Device uri
         * @property {string|null} [displayName] Device displayName
         * @property {string|null} [kind] Device kind
         * @property {Array.<DeviceCapability>|null} [capabilities] Device capabilities
         * @property {AddressSpace|null} [defaultAddressSpace] Device defaultAddressSpace
         * @property {string|null} [system] Device system
         */

        /**
         * Constructs a new Device.
         * @memberof DevicesResponse
         * @classdesc Represents a Device.
         * @implements IDevice
         * @constructor
         * @param {DevicesResponse.IDevice=} [properties] Properties to set
         */
        function Device(properties) {
            this.capabilities = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Device uri.
         * @member {string} uri
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.uri = "";

        /**
         * Device displayName.
         * @member {string} displayName
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.displayName = "";

        /**
         * Device kind.
         * @member {string} kind
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.kind = "";

        /**
         * Device capabilities.
         * @member {Array.<DeviceCapability>} capabilities
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.capabilities = $util.emptyArray;

        /**
         * Device defaultAddressSpace.
         * @member {AddressSpace} defaultAddressSpace
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.defaultAddressSpace = 0;

        /**
         * Device system.
         * @member {string} system
         * @memberof DevicesResponse.Device
         * @instance
         */
        Device.prototype.system = "";

        /**
         * Creates a new Device instance using the specified properties.
         * @function create
         * @memberof DevicesResponse.Device
         * @static
         * @param {DevicesResponse.IDevice=} [properties] Properties to set
         * @returns {DevicesResponse.Device} Device instance
         */
        Device.create = function create(properties) {
            return new Device(properties);
        };

        /**
         * Encodes the specified Device message. Does not implicitly {@link DevicesResponse.Device.verify|verify} messages.
         * @function encode
         * @memberof DevicesResponse.Device
         * @static
         * @param {DevicesResponse.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
            if (message.displayName != null && Object.hasOwnProperty.call(message, "displayName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.displayName);
            if (message.kind != null && Object.hasOwnProperty.call(message, "kind"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.kind);
            if (message.capabilities != null && message.capabilities.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.capabilities.length; ++i)
                    writer.int32(message.capabilities[i]);
                writer.ldelim();
            }
            if (message.defaultAddressSpace != null && Object.hasOwnProperty.call(message, "defaultAddressSpace"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.defaultAddressSpace);
            if (message.system != null && Object.hasOwnProperty.call(message, "system"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.system);
            return writer;
        };

        /**
         * Encodes the specified Device message, length delimited. Does not implicitly {@link DevicesResponse.Device.verify|verify} messages.
         * @function encodeDelimited
         * @memberof DevicesResponse.Device
         * @static
         * @param {DevicesResponse.IDevice} message Device message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Device.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Device message from the specified reader or buffer.
         * @function decode
         * @memberof DevicesResponse.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {DevicesResponse.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DevicesResponse.Device();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.uri = reader.string();
                        break;
                    }
                case 2: {
                        message.displayName = reader.string();
                        break;
                    }
                case 3: {
                        message.kind = reader.string();
                        break;
                    }
                case 4: {
                        if (!(message.capabilities && message.capabilities.length))
                            message.capabilities = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.capabilities.push(reader.int32());
                        } else
                            message.capabilities.push(reader.int32());
                        break;
                    }
                case 5: {
                        message.defaultAddressSpace = reader.int32();
                        break;
                    }
                case 6: {
                        message.system = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Device message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof DevicesResponse.Device
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {DevicesResponse.Device} Device
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Device.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Device message.
         * @function verify
         * @memberof DevicesResponse.Device
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Device.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.uri != null && message.hasOwnProperty("uri"))
                if (!$util.isString(message.uri))
                    return "uri: string expected";
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                if (!$util.isString(message.displayName))
                    return "displayName: string expected";
            if (message.kind != null && message.hasOwnProperty("kind"))
                if (!$util.isString(message.kind))
                    return "kind: string expected";
            if (message.capabilities != null && message.hasOwnProperty("capabilities")) {
                if (!Array.isArray(message.capabilities))
                    return "capabilities: array expected";
                for (let i = 0; i < message.capabilities.length; ++i)
                    switch (message.capabilities[i]) {
                    default:
                        return "capabilities: enum value[] expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 10:
                    case 11:
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 20:
                        break;
                    }
            }
            if (message.defaultAddressSpace != null && message.hasOwnProperty("defaultAddressSpace"))
                switch (message.defaultAddressSpace) {
                default:
                    return "defaultAddressSpace: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.system != null && message.hasOwnProperty("system"))
                if (!$util.isString(message.system))
                    return "system: string expected";
            return null;
        };

        /**
         * Creates a Device message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof DevicesResponse.Device
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {DevicesResponse.Device} Device
         */
        Device.fromObject = function fromObject(object) {
            if (object instanceof $root.DevicesResponse.Device)
                return object;
            let message = new $root.DevicesResponse.Device();
            if (object.uri != null)
                message.uri = String(object.uri);
            if (object.displayName != null)
                message.displayName = String(object.displayName);
            if (object.kind != null)
                message.kind = String(object.kind);
            if (object.capabilities) {
                if (!Array.isArray(object.capabilities))
                    throw TypeError(".DevicesResponse.Device.capabilities: array expected");
                message.capabilities = [];
                for (let i = 0; i < object.capabilities.length; ++i)
                    switch (object.capabilities[i]) {
                    default:
                        if (typeof object.capabilities[i] === "number") {
                            message.capabilities[i] = object.capabilities[i];
                            break;
                        }
                    case "None":
                    case 0:
                        message.capabilities[i] = 0;
                        break;
                    case "ReadMemory":
                    case 1:
                        message.capabilities[i] = 1;
                        break;
                    case "WriteMemory":
                    case 2:
                        message.capabilities[i] = 2;
                        break;
                    case "ExecuteASM":
                    case 3:
                        message.capabilities[i] = 3;
                        break;
                    case "ResetSystem":
                    case 4:
                        message.capabilities[i] = 4;
                        break;
                    case "PauseUnpauseEmulation":
                    case 5:
                        message.capabilities[i] = 5;
                        break;
                    case "PauseToggleEmulation":
                    case 6:
                        message.capabilities[i] = 6;
                        break;
                    case "ResetToMenu":
                    case 7:
                        message.capabilities[i] = 7;
                        break;
                    case "FetchFields":
                    case 8:
                        message.capabilities[i] = 8;
                        break;
                    case "ReadDirectory":
                    case 10:
                        message.capabilities[i] = 10;
                        break;
                    case "MakeDirectory":
                    case 11:
                        message.capabilities[i] = 11;
                        break;
                    case "RemoveFile":
                    case 12:
                        message.capabilities[i] = 12;
                        break;
                    case "RenameFile":
                    case 13:
                        message.capabilities[i] = 13;
                        break;
                    case "PutFile":
                    case 14:
                        message.capabilities[i] = 14;
                        break;
                    case "GetFile":
                    case 15:
                        message.capabilities[i] = 15;
                        break;
                    case "BootFile":
                    case 16:
                        message.capabilities[i] = 16;
                        break;
                    case "NWACommand":
                    case 20:
                        message.capabilities[i] = 20;
                        break;
                    }
            }
            switch (object.defaultAddressSpace) {
            default:
                if (typeof object.defaultAddressSpace === "number") {
                    message.defaultAddressSpace = object.defaultAddressSpace;
                    break;
                }
                break;
            case "FxPakPro":
            case 0:
                message.defaultAddressSpace = 0;
                break;
            case "SnesABus":
            case 1:
                message.defaultAddressSpace = 1;
                break;
            case "Raw":
            case 2:
                message.defaultAddressSpace = 2;
                break;
            }
            if (object.system != null)
                message.system = String(object.system);
            return message;
        };

        /**
         * Creates a plain object from a Device message. Also converts values to other types if specified.
         * @function toObject
         * @memberof DevicesResponse.Device
         * @static
         * @param {DevicesResponse.Device} message Device
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Device.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                object.capabilities = [];
            if (options.defaults) {
                object.uri = "";
                object.displayName = "";
                object.kind = "";
                object.defaultAddressSpace = options.enums === String ? "FxPakPro" : 0;
                object.system = "";
            }
            if (message.uri != null && message.hasOwnProperty("uri"))
                object.uri = message.uri;
            if (message.displayName != null && message.hasOwnProperty("displayName"))
                object.displayName = message.displayName;
            if (message.kind != null && message.hasOwnProperty("kind"))
                object.kind = message.kind;
            if (message.capabilities && message.capabilities.length) {
                object.capabilities = [];
                for (let j = 0; j < message.capabilities.length; ++j)
                    object.capabilities[j] = options.enums === String ? $root.DeviceCapability[message.capabilities[j]] === undefined ? message.capabilities[j] : $root.DeviceCapability[message.capabilities[j]] : message.capabilities[j];
            }
            if (message.defaultAddressSpace != null && message.hasOwnProperty("defaultAddressSpace"))
                object.defaultAddressSpace = options.enums === String ? $root.AddressSpace[message.defaultAddressSpace] === undefined ? message.defaultAddressSpace : $root.AddressSpace[message.defaultAddressSpace] : message.defaultAddressSpace;
            if (message.system != null && message.hasOwnProperty("system"))
                object.system = message.system;
            return object;
        };

        /**
         * Converts this Device to JSON.
         * @function toJSON
         * @memberof DevicesResponse.Device
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Device.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Device
         * @function getTypeUrl
         * @memberof DevicesResponse.Device
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Device.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/DevicesResponse.Device";
        };

        return Device;
    })();

    return DevicesResponse;
})();

export const ResetSystemRequest = $root.ResetSystemRequest = (() => {

    /**
     * Properties of a ResetSystemRequest.
     * @exports IResetSystemRequest
     * @interface IResetSystemRequest
     * @property {string|null} [uri] ResetSystemRequest uri
     */

    /**
     * Constructs a new ResetSystemRequest.
     * @exports ResetSystemRequest
     * @classdesc Represents a ResetSystemRequest.
     * @implements IResetSystemRequest
     * @constructor
     * @param {IResetSystemRequest=} [properties] Properties to set
     */
    function ResetSystemRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResetSystemRequest uri.
     * @member {string} uri
     * @memberof ResetSystemRequest
     * @instance
     */
    ResetSystemRequest.prototype.uri = "";

    /**
     * Creates a new ResetSystemRequest instance using the specified properties.
     * @function create
     * @memberof ResetSystemRequest
     * @static
     * @param {IResetSystemRequest=} [properties] Properties to set
     * @returns {ResetSystemRequest} ResetSystemRequest instance
     */
    ResetSystemRequest.create = function create(properties) {
        return new ResetSystemRequest(properties);
    };

    /**
     * Encodes the specified ResetSystemRequest message. Does not implicitly {@link ResetSystemRequest.verify|verify} messages.
     * @function encode
     * @memberof ResetSystemRequest
     * @static
     * @param {IResetSystemRequest} message ResetSystemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetSystemRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified ResetSystemRequest message, length delimited. Does not implicitly {@link ResetSystemRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResetSystemRequest
     * @static
     * @param {IResetSystemRequest} message ResetSystemRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetSystemRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResetSystemRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ResetSystemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResetSystemRequest} ResetSystemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetSystemRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResetSystemRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResetSystemRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResetSystemRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResetSystemRequest} ResetSystemRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetSystemRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResetSystemRequest message.
     * @function verify
     * @memberof ResetSystemRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResetSystemRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a ResetSystemRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResetSystemRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResetSystemRequest} ResetSystemRequest
     */
    ResetSystemRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ResetSystemRequest)
            return object;
        let message = new $root.ResetSystemRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a ResetSystemRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResetSystemRequest
     * @static
     * @param {ResetSystemRequest} message ResetSystemRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResetSystemRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this ResetSystemRequest to JSON.
     * @function toJSON
     * @memberof ResetSystemRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResetSystemRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResetSystemRequest
     * @function getTypeUrl
     * @memberof ResetSystemRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResetSystemRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResetSystemRequest";
    };

    return ResetSystemRequest;
})();

export const ResetSystemResponse = $root.ResetSystemResponse = (() => {

    /**
     * Properties of a ResetSystemResponse.
     * @exports IResetSystemResponse
     * @interface IResetSystemResponse
     * @property {string|null} [uri] ResetSystemResponse uri
     */

    /**
     * Constructs a new ResetSystemResponse.
     * @exports ResetSystemResponse
     * @classdesc Represents a ResetSystemResponse.
     * @implements IResetSystemResponse
     * @constructor
     * @param {IResetSystemResponse=} [properties] Properties to set
     */
    function ResetSystemResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResetSystemResponse uri.
     * @member {string} uri
     * @memberof ResetSystemResponse
     * @instance
     */
    ResetSystemResponse.prototype.uri = "";

    /**
     * Creates a new ResetSystemResponse instance using the specified properties.
     * @function create
     * @memberof ResetSystemResponse
     * @static
     * @param {IResetSystemResponse=} [properties] Properties to set
     * @returns {ResetSystemResponse} ResetSystemResponse instance
     */
    ResetSystemResponse.create = function create(properties) {
        return new ResetSystemResponse(properties);
    };

    /**
     * Encodes the specified ResetSystemResponse message. Does not implicitly {@link ResetSystemResponse.verify|verify} messages.
     * @function encode
     * @memberof ResetSystemResponse
     * @static
     * @param {IResetSystemResponse} message ResetSystemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetSystemResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified ResetSystemResponse message, length delimited. Does not implicitly {@link ResetSystemResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResetSystemResponse
     * @static
     * @param {IResetSystemResponse} message ResetSystemResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetSystemResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResetSystemResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ResetSystemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResetSystemResponse} ResetSystemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetSystemResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResetSystemResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResetSystemResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResetSystemResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResetSystemResponse} ResetSystemResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetSystemResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResetSystemResponse message.
     * @function verify
     * @memberof ResetSystemResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResetSystemResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a ResetSystemResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResetSystemResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResetSystemResponse} ResetSystemResponse
     */
    ResetSystemResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ResetSystemResponse)
            return object;
        let message = new $root.ResetSystemResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a ResetSystemResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResetSystemResponse
     * @static
     * @param {ResetSystemResponse} message ResetSystemResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResetSystemResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this ResetSystemResponse to JSON.
     * @function toJSON
     * @memberof ResetSystemResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResetSystemResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResetSystemResponse
     * @function getTypeUrl
     * @memberof ResetSystemResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResetSystemResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResetSystemResponse";
    };

    return ResetSystemResponse;
})();

export const ResetToMenuRequest = $root.ResetToMenuRequest = (() => {

    /**
     * Properties of a ResetToMenuRequest.
     * @exports IResetToMenuRequest
     * @interface IResetToMenuRequest
     * @property {string|null} [uri] ResetToMenuRequest uri
     */

    /**
     * Constructs a new ResetToMenuRequest.
     * @exports ResetToMenuRequest
     * @classdesc Represents a ResetToMenuRequest.
     * @implements IResetToMenuRequest
     * @constructor
     * @param {IResetToMenuRequest=} [properties] Properties to set
     */
    function ResetToMenuRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResetToMenuRequest uri.
     * @member {string} uri
     * @memberof ResetToMenuRequest
     * @instance
     */
    ResetToMenuRequest.prototype.uri = "";

    /**
     * Creates a new ResetToMenuRequest instance using the specified properties.
     * @function create
     * @memberof ResetToMenuRequest
     * @static
     * @param {IResetToMenuRequest=} [properties] Properties to set
     * @returns {ResetToMenuRequest} ResetToMenuRequest instance
     */
    ResetToMenuRequest.create = function create(properties) {
        return new ResetToMenuRequest(properties);
    };

    /**
     * Encodes the specified ResetToMenuRequest message. Does not implicitly {@link ResetToMenuRequest.verify|verify} messages.
     * @function encode
     * @memberof ResetToMenuRequest
     * @static
     * @param {IResetToMenuRequest} message ResetToMenuRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetToMenuRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified ResetToMenuRequest message, length delimited. Does not implicitly {@link ResetToMenuRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResetToMenuRequest
     * @static
     * @param {IResetToMenuRequest} message ResetToMenuRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetToMenuRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResetToMenuRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ResetToMenuRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResetToMenuRequest} ResetToMenuRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetToMenuRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResetToMenuRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResetToMenuRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResetToMenuRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResetToMenuRequest} ResetToMenuRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetToMenuRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResetToMenuRequest message.
     * @function verify
     * @memberof ResetToMenuRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResetToMenuRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a ResetToMenuRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResetToMenuRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResetToMenuRequest} ResetToMenuRequest
     */
    ResetToMenuRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ResetToMenuRequest)
            return object;
        let message = new $root.ResetToMenuRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a ResetToMenuRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResetToMenuRequest
     * @static
     * @param {ResetToMenuRequest} message ResetToMenuRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResetToMenuRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this ResetToMenuRequest to JSON.
     * @function toJSON
     * @memberof ResetToMenuRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResetToMenuRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResetToMenuRequest
     * @function getTypeUrl
     * @memberof ResetToMenuRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResetToMenuRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResetToMenuRequest";
    };

    return ResetToMenuRequest;
})();

export const ResetToMenuResponse = $root.ResetToMenuResponse = (() => {

    /**
     * Properties of a ResetToMenuResponse.
     * @exports IResetToMenuResponse
     * @interface IResetToMenuResponse
     * @property {string|null} [uri] ResetToMenuResponse uri
     */

    /**
     * Constructs a new ResetToMenuResponse.
     * @exports ResetToMenuResponse
     * @classdesc Represents a ResetToMenuResponse.
     * @implements IResetToMenuResponse
     * @constructor
     * @param {IResetToMenuResponse=} [properties] Properties to set
     */
    function ResetToMenuResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ResetToMenuResponse uri.
     * @member {string} uri
     * @memberof ResetToMenuResponse
     * @instance
     */
    ResetToMenuResponse.prototype.uri = "";

    /**
     * Creates a new ResetToMenuResponse instance using the specified properties.
     * @function create
     * @memberof ResetToMenuResponse
     * @static
     * @param {IResetToMenuResponse=} [properties] Properties to set
     * @returns {ResetToMenuResponse} ResetToMenuResponse instance
     */
    ResetToMenuResponse.create = function create(properties) {
        return new ResetToMenuResponse(properties);
    };

    /**
     * Encodes the specified ResetToMenuResponse message. Does not implicitly {@link ResetToMenuResponse.verify|verify} messages.
     * @function encode
     * @memberof ResetToMenuResponse
     * @static
     * @param {IResetToMenuResponse} message ResetToMenuResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetToMenuResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified ResetToMenuResponse message, length delimited. Does not implicitly {@link ResetToMenuResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ResetToMenuResponse
     * @static
     * @param {IResetToMenuResponse} message ResetToMenuResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ResetToMenuResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ResetToMenuResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ResetToMenuResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ResetToMenuResponse} ResetToMenuResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetToMenuResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ResetToMenuResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ResetToMenuResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ResetToMenuResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ResetToMenuResponse} ResetToMenuResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ResetToMenuResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ResetToMenuResponse message.
     * @function verify
     * @memberof ResetToMenuResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ResetToMenuResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a ResetToMenuResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ResetToMenuResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ResetToMenuResponse} ResetToMenuResponse
     */
    ResetToMenuResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ResetToMenuResponse)
            return object;
        let message = new $root.ResetToMenuResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a ResetToMenuResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ResetToMenuResponse
     * @static
     * @param {ResetToMenuResponse} message ResetToMenuResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ResetToMenuResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this ResetToMenuResponse to JSON.
     * @function toJSON
     * @memberof ResetToMenuResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ResetToMenuResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ResetToMenuResponse
     * @function getTypeUrl
     * @memberof ResetToMenuResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ResetToMenuResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ResetToMenuResponse";
    };

    return ResetToMenuResponse;
})();

export const PauseEmulationRequest = $root.PauseEmulationRequest = (() => {

    /**
     * Properties of a PauseEmulationRequest.
     * @exports IPauseEmulationRequest
     * @interface IPauseEmulationRequest
     * @property {string|null} [uri] PauseEmulationRequest uri
     * @property {boolean|null} [paused] PauseEmulationRequest paused
     */

    /**
     * Constructs a new PauseEmulationRequest.
     * @exports PauseEmulationRequest
     * @classdesc Represents a PauseEmulationRequest.
     * @implements IPauseEmulationRequest
     * @constructor
     * @param {IPauseEmulationRequest=} [properties] Properties to set
     */
    function PauseEmulationRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PauseEmulationRequest uri.
     * @member {string} uri
     * @memberof PauseEmulationRequest
     * @instance
     */
    PauseEmulationRequest.prototype.uri = "";

    /**
     * PauseEmulationRequest paused.
     * @member {boolean} paused
     * @memberof PauseEmulationRequest
     * @instance
     */
    PauseEmulationRequest.prototype.paused = false;

    /**
     * Creates a new PauseEmulationRequest instance using the specified properties.
     * @function create
     * @memberof PauseEmulationRequest
     * @static
     * @param {IPauseEmulationRequest=} [properties] Properties to set
     * @returns {PauseEmulationRequest} PauseEmulationRequest instance
     */
    PauseEmulationRequest.create = function create(properties) {
        return new PauseEmulationRequest(properties);
    };

    /**
     * Encodes the specified PauseEmulationRequest message. Does not implicitly {@link PauseEmulationRequest.verify|verify} messages.
     * @function encode
     * @memberof PauseEmulationRequest
     * @static
     * @param {IPauseEmulationRequest} message PauseEmulationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseEmulationRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.paused != null && Object.hasOwnProperty.call(message, "paused"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.paused);
        return writer;
    };

    /**
     * Encodes the specified PauseEmulationRequest message, length delimited. Does not implicitly {@link PauseEmulationRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PauseEmulationRequest
     * @static
     * @param {IPauseEmulationRequest} message PauseEmulationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseEmulationRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PauseEmulationRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PauseEmulationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PauseEmulationRequest} PauseEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseEmulationRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PauseEmulationRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.paused = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PauseEmulationRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PauseEmulationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PauseEmulationRequest} PauseEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseEmulationRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PauseEmulationRequest message.
     * @function verify
     * @memberof PauseEmulationRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PauseEmulationRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.paused != null && message.hasOwnProperty("paused"))
            if (typeof message.paused !== "boolean")
                return "paused: boolean expected";
        return null;
    };

    /**
     * Creates a PauseEmulationRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PauseEmulationRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PauseEmulationRequest} PauseEmulationRequest
     */
    PauseEmulationRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PauseEmulationRequest)
            return object;
        let message = new $root.PauseEmulationRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.paused != null)
            message.paused = Boolean(object.paused);
        return message;
    };

    /**
     * Creates a plain object from a PauseEmulationRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PauseEmulationRequest
     * @static
     * @param {PauseEmulationRequest} message PauseEmulationRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PauseEmulationRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.paused = false;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.paused != null && message.hasOwnProperty("paused"))
            object.paused = message.paused;
        return object;
    };

    /**
     * Converts this PauseEmulationRequest to JSON.
     * @function toJSON
     * @memberof PauseEmulationRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PauseEmulationRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PauseEmulationRequest
     * @function getTypeUrl
     * @memberof PauseEmulationRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PauseEmulationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PauseEmulationRequest";
    };

    return PauseEmulationRequest;
})();

export const PauseEmulationResponse = $root.PauseEmulationResponse = (() => {

    /**
     * Properties of a PauseEmulationResponse.
     * @exports IPauseEmulationResponse
     * @interface IPauseEmulationResponse
     * @property {string|null} [uri] PauseEmulationResponse uri
     * @property {boolean|null} [paused] PauseEmulationResponse paused
     */

    /**
     * Constructs a new PauseEmulationResponse.
     * @exports PauseEmulationResponse
     * @classdesc Represents a PauseEmulationResponse.
     * @implements IPauseEmulationResponse
     * @constructor
     * @param {IPauseEmulationResponse=} [properties] Properties to set
     */
    function PauseEmulationResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PauseEmulationResponse uri.
     * @member {string} uri
     * @memberof PauseEmulationResponse
     * @instance
     */
    PauseEmulationResponse.prototype.uri = "";

    /**
     * PauseEmulationResponse paused.
     * @member {boolean} paused
     * @memberof PauseEmulationResponse
     * @instance
     */
    PauseEmulationResponse.prototype.paused = false;

    /**
     * Creates a new PauseEmulationResponse instance using the specified properties.
     * @function create
     * @memberof PauseEmulationResponse
     * @static
     * @param {IPauseEmulationResponse=} [properties] Properties to set
     * @returns {PauseEmulationResponse} PauseEmulationResponse instance
     */
    PauseEmulationResponse.create = function create(properties) {
        return new PauseEmulationResponse(properties);
    };

    /**
     * Encodes the specified PauseEmulationResponse message. Does not implicitly {@link PauseEmulationResponse.verify|verify} messages.
     * @function encode
     * @memberof PauseEmulationResponse
     * @static
     * @param {IPauseEmulationResponse} message PauseEmulationResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseEmulationResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.paused != null && Object.hasOwnProperty.call(message, "paused"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.paused);
        return writer;
    };

    /**
     * Encodes the specified PauseEmulationResponse message, length delimited. Does not implicitly {@link PauseEmulationResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PauseEmulationResponse
     * @static
     * @param {IPauseEmulationResponse} message PauseEmulationResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseEmulationResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PauseEmulationResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PauseEmulationResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PauseEmulationResponse} PauseEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseEmulationResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PauseEmulationResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.paused = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PauseEmulationResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PauseEmulationResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PauseEmulationResponse} PauseEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseEmulationResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PauseEmulationResponse message.
     * @function verify
     * @memberof PauseEmulationResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PauseEmulationResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.paused != null && message.hasOwnProperty("paused"))
            if (typeof message.paused !== "boolean")
                return "paused: boolean expected";
        return null;
    };

    /**
     * Creates a PauseEmulationResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PauseEmulationResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PauseEmulationResponse} PauseEmulationResponse
     */
    PauseEmulationResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PauseEmulationResponse)
            return object;
        let message = new $root.PauseEmulationResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.paused != null)
            message.paused = Boolean(object.paused);
        return message;
    };

    /**
     * Creates a plain object from a PauseEmulationResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PauseEmulationResponse
     * @static
     * @param {PauseEmulationResponse} message PauseEmulationResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PauseEmulationResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.paused = false;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.paused != null && message.hasOwnProperty("paused"))
            object.paused = message.paused;
        return object;
    };

    /**
     * Converts this PauseEmulationResponse to JSON.
     * @function toJSON
     * @memberof PauseEmulationResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PauseEmulationResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PauseEmulationResponse
     * @function getTypeUrl
     * @memberof PauseEmulationResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PauseEmulationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PauseEmulationResponse";
    };

    return PauseEmulationResponse;
})();

export const PauseToggleEmulationRequest = $root.PauseToggleEmulationRequest = (() => {

    /**
     * Properties of a PauseToggleEmulationRequest.
     * @exports IPauseToggleEmulationRequest
     * @interface IPauseToggleEmulationRequest
     * @property {string|null} [uri] PauseToggleEmulationRequest uri
     */

    /**
     * Constructs a new PauseToggleEmulationRequest.
     * @exports PauseToggleEmulationRequest
     * @classdesc Represents a PauseToggleEmulationRequest.
     * @implements IPauseToggleEmulationRequest
     * @constructor
     * @param {IPauseToggleEmulationRequest=} [properties] Properties to set
     */
    function PauseToggleEmulationRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PauseToggleEmulationRequest uri.
     * @member {string} uri
     * @memberof PauseToggleEmulationRequest
     * @instance
     */
    PauseToggleEmulationRequest.prototype.uri = "";

    /**
     * Creates a new PauseToggleEmulationRequest instance using the specified properties.
     * @function create
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {IPauseToggleEmulationRequest=} [properties] Properties to set
     * @returns {PauseToggleEmulationRequest} PauseToggleEmulationRequest instance
     */
    PauseToggleEmulationRequest.create = function create(properties) {
        return new PauseToggleEmulationRequest(properties);
    };

    /**
     * Encodes the specified PauseToggleEmulationRequest message. Does not implicitly {@link PauseToggleEmulationRequest.verify|verify} messages.
     * @function encode
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {IPauseToggleEmulationRequest} message PauseToggleEmulationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseToggleEmulationRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified PauseToggleEmulationRequest message, length delimited. Does not implicitly {@link PauseToggleEmulationRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {IPauseToggleEmulationRequest} message PauseToggleEmulationRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseToggleEmulationRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PauseToggleEmulationRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PauseToggleEmulationRequest} PauseToggleEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseToggleEmulationRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PauseToggleEmulationRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PauseToggleEmulationRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PauseToggleEmulationRequest} PauseToggleEmulationRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseToggleEmulationRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PauseToggleEmulationRequest message.
     * @function verify
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PauseToggleEmulationRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a PauseToggleEmulationRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PauseToggleEmulationRequest} PauseToggleEmulationRequest
     */
    PauseToggleEmulationRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PauseToggleEmulationRequest)
            return object;
        let message = new $root.PauseToggleEmulationRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a PauseToggleEmulationRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {PauseToggleEmulationRequest} message PauseToggleEmulationRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PauseToggleEmulationRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this PauseToggleEmulationRequest to JSON.
     * @function toJSON
     * @memberof PauseToggleEmulationRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PauseToggleEmulationRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PauseToggleEmulationRequest
     * @function getTypeUrl
     * @memberof PauseToggleEmulationRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PauseToggleEmulationRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PauseToggleEmulationRequest";
    };

    return PauseToggleEmulationRequest;
})();

export const PauseToggleEmulationResponse = $root.PauseToggleEmulationResponse = (() => {

    /**
     * Properties of a PauseToggleEmulationResponse.
     * @exports IPauseToggleEmulationResponse
     * @interface IPauseToggleEmulationResponse
     * @property {string|null} [uri] PauseToggleEmulationResponse uri
     */

    /**
     * Constructs a new PauseToggleEmulationResponse.
     * @exports PauseToggleEmulationResponse
     * @classdesc Represents a PauseToggleEmulationResponse.
     * @implements IPauseToggleEmulationResponse
     * @constructor
     * @param {IPauseToggleEmulationResponse=} [properties] Properties to set
     */
    function PauseToggleEmulationResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PauseToggleEmulationResponse uri.
     * @member {string} uri
     * @memberof PauseToggleEmulationResponse
     * @instance
     */
    PauseToggleEmulationResponse.prototype.uri = "";

    /**
     * Creates a new PauseToggleEmulationResponse instance using the specified properties.
     * @function create
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {IPauseToggleEmulationResponse=} [properties] Properties to set
     * @returns {PauseToggleEmulationResponse} PauseToggleEmulationResponse instance
     */
    PauseToggleEmulationResponse.create = function create(properties) {
        return new PauseToggleEmulationResponse(properties);
    };

    /**
     * Encodes the specified PauseToggleEmulationResponse message. Does not implicitly {@link PauseToggleEmulationResponse.verify|verify} messages.
     * @function encode
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {IPauseToggleEmulationResponse} message PauseToggleEmulationResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseToggleEmulationResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        return writer;
    };

    /**
     * Encodes the specified PauseToggleEmulationResponse message, length delimited. Does not implicitly {@link PauseToggleEmulationResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {IPauseToggleEmulationResponse} message PauseToggleEmulationResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PauseToggleEmulationResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PauseToggleEmulationResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PauseToggleEmulationResponse} PauseToggleEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseToggleEmulationResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PauseToggleEmulationResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PauseToggleEmulationResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PauseToggleEmulationResponse} PauseToggleEmulationResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PauseToggleEmulationResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PauseToggleEmulationResponse message.
     * @function verify
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PauseToggleEmulationResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        return null;
    };

    /**
     * Creates a PauseToggleEmulationResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PauseToggleEmulationResponse} PauseToggleEmulationResponse
     */
    PauseToggleEmulationResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PauseToggleEmulationResponse)
            return object;
        let message = new $root.PauseToggleEmulationResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        return message;
    };

    /**
     * Creates a plain object from a PauseToggleEmulationResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {PauseToggleEmulationResponse} message PauseToggleEmulationResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PauseToggleEmulationResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        return object;
    };

    /**
     * Converts this PauseToggleEmulationResponse to JSON.
     * @function toJSON
     * @memberof PauseToggleEmulationResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PauseToggleEmulationResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PauseToggleEmulationResponse
     * @function getTypeUrl
     * @memberof PauseToggleEmulationResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PauseToggleEmulationResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PauseToggleEmulationResponse";
    };

    return PauseToggleEmulationResponse;
})();

export const DetectMemoryMappingRequest = $root.DetectMemoryMappingRequest = (() => {

    /**
     * Properties of a DetectMemoryMappingRequest.
     * @exports IDetectMemoryMappingRequest
     * @interface IDetectMemoryMappingRequest
     * @property {string|null} [uri] DetectMemoryMappingRequest uri
     * @property {MemoryMapping|null} [fallbackMemoryMapping] DetectMemoryMappingRequest fallbackMemoryMapping
     * @property {Uint8Array|null} [romHeader00FFB0] DetectMemoryMappingRequest romHeader00FFB0
     */

    /**
     * Constructs a new DetectMemoryMappingRequest.
     * @exports DetectMemoryMappingRequest
     * @classdesc Represents a DetectMemoryMappingRequest.
     * @implements IDetectMemoryMappingRequest
     * @constructor
     * @param {IDetectMemoryMappingRequest=} [properties] Properties to set
     */
    function DetectMemoryMappingRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DetectMemoryMappingRequest uri.
     * @member {string} uri
     * @memberof DetectMemoryMappingRequest
     * @instance
     */
    DetectMemoryMappingRequest.prototype.uri = "";

    /**
     * DetectMemoryMappingRequest fallbackMemoryMapping.
     * @member {MemoryMapping|null|undefined} fallbackMemoryMapping
     * @memberof DetectMemoryMappingRequest
     * @instance
     */
    DetectMemoryMappingRequest.prototype.fallbackMemoryMapping = null;

    /**
     * DetectMemoryMappingRequest romHeader00FFB0.
     * @member {Uint8Array|null|undefined} romHeader00FFB0
     * @memberof DetectMemoryMappingRequest
     * @instance
     */
    DetectMemoryMappingRequest.prototype.romHeader00FFB0 = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(DetectMemoryMappingRequest.prototype, "_fallbackMemoryMapping", {
        get: $util.oneOfGetter($oneOfFields = ["fallbackMemoryMapping"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(DetectMemoryMappingRequest.prototype, "_romHeader00FFB0", {
        get: $util.oneOfGetter($oneOfFields = ["romHeader00FFB0"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new DetectMemoryMappingRequest instance using the specified properties.
     * @function create
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {IDetectMemoryMappingRequest=} [properties] Properties to set
     * @returns {DetectMemoryMappingRequest} DetectMemoryMappingRequest instance
     */
    DetectMemoryMappingRequest.create = function create(properties) {
        return new DetectMemoryMappingRequest(properties);
    };

    /**
     * Encodes the specified DetectMemoryMappingRequest message. Does not implicitly {@link DetectMemoryMappingRequest.verify|verify} messages.
     * @function encode
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {IDetectMemoryMappingRequest} message DetectMemoryMappingRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DetectMemoryMappingRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.fallbackMemoryMapping != null && Object.hasOwnProperty.call(message, "fallbackMemoryMapping"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.fallbackMemoryMapping);
        if (message.romHeader00FFB0 != null && Object.hasOwnProperty.call(message, "romHeader00FFB0"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.romHeader00FFB0);
        return writer;
    };

    /**
     * Encodes the specified DetectMemoryMappingRequest message, length delimited. Does not implicitly {@link DetectMemoryMappingRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {IDetectMemoryMappingRequest} message DetectMemoryMappingRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DetectMemoryMappingRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DetectMemoryMappingRequest message from the specified reader or buffer.
     * @function decode
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DetectMemoryMappingRequest} DetectMemoryMappingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DetectMemoryMappingRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DetectMemoryMappingRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.fallbackMemoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.romHeader00FFB0 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DetectMemoryMappingRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DetectMemoryMappingRequest} DetectMemoryMappingRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DetectMemoryMappingRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DetectMemoryMappingRequest message.
     * @function verify
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DetectMemoryMappingRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.fallbackMemoryMapping != null && message.hasOwnProperty("fallbackMemoryMapping")) {
            properties._fallbackMemoryMapping = 1;
            switch (message.fallbackMemoryMapping) {
            default:
                return "fallbackMemoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        }
        if (message.romHeader00FFB0 != null && message.hasOwnProperty("romHeader00FFB0")) {
            properties._romHeader00FFB0 = 1;
            if (!(message.romHeader00FFB0 && typeof message.romHeader00FFB0.length === "number" || $util.isString(message.romHeader00FFB0)))
                return "romHeader00FFB0: buffer expected";
        }
        return null;
    };

    /**
     * Creates a DetectMemoryMappingRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DetectMemoryMappingRequest} DetectMemoryMappingRequest
     */
    DetectMemoryMappingRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.DetectMemoryMappingRequest)
            return object;
        let message = new $root.DetectMemoryMappingRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        switch (object.fallbackMemoryMapping) {
        default:
            if (typeof object.fallbackMemoryMapping === "number") {
                message.fallbackMemoryMapping = object.fallbackMemoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.fallbackMemoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.fallbackMemoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.fallbackMemoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.fallbackMemoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.fallbackMemoryMapping = 4;
            break;
        }
        if (object.romHeader00FFB0 != null)
            if (typeof object.romHeader00FFB0 === "string")
                $util.base64.decode(object.romHeader00FFB0, message.romHeader00FFB0 = $util.newBuffer($util.base64.length(object.romHeader00FFB0)), 0);
            else if (object.romHeader00FFB0.length >= 0)
                message.romHeader00FFB0 = object.romHeader00FFB0;
        return message;
    };

    /**
     * Creates a plain object from a DetectMemoryMappingRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {DetectMemoryMappingRequest} message DetectMemoryMappingRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DetectMemoryMappingRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.fallbackMemoryMapping != null && message.hasOwnProperty("fallbackMemoryMapping")) {
            object.fallbackMemoryMapping = options.enums === String ? $root.MemoryMapping[message.fallbackMemoryMapping] === undefined ? message.fallbackMemoryMapping : $root.MemoryMapping[message.fallbackMemoryMapping] : message.fallbackMemoryMapping;
            if (options.oneofs)
                object._fallbackMemoryMapping = "fallbackMemoryMapping";
        }
        if (message.romHeader00FFB0 != null && message.hasOwnProperty("romHeader00FFB0")) {
            object.romHeader00FFB0 = options.bytes === String ? $util.base64.encode(message.romHeader00FFB0, 0, message.romHeader00FFB0.length) : options.bytes === Array ? Array.prototype.slice.call(message.romHeader00FFB0) : message.romHeader00FFB0;
            if (options.oneofs)
                object._romHeader00FFB0 = "romHeader00FFB0";
        }
        return object;
    };

    /**
     * Converts this DetectMemoryMappingRequest to JSON.
     * @function toJSON
     * @memberof DetectMemoryMappingRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DetectMemoryMappingRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DetectMemoryMappingRequest
     * @function getTypeUrl
     * @memberof DetectMemoryMappingRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DetectMemoryMappingRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DetectMemoryMappingRequest";
    };

    return DetectMemoryMappingRequest;
})();

export const DetectMemoryMappingResponse = $root.DetectMemoryMappingResponse = (() => {

    /**
     * Properties of a DetectMemoryMappingResponse.
     * @exports IDetectMemoryMappingResponse
     * @interface IDetectMemoryMappingResponse
     * @property {string|null} [uri] DetectMemoryMappingResponse uri
     * @property {MemoryMapping|null} [memoryMapping] DetectMemoryMappingResponse memoryMapping
     * @property {boolean|null} [confidence] DetectMemoryMappingResponse confidence
     * @property {Uint8Array|null} [romHeader00FFB0] DetectMemoryMappingResponse romHeader00FFB0
     */

    /**
     * Constructs a new DetectMemoryMappingResponse.
     * @exports DetectMemoryMappingResponse
     * @classdesc Represents a DetectMemoryMappingResponse.
     * @implements IDetectMemoryMappingResponse
     * @constructor
     * @param {IDetectMemoryMappingResponse=} [properties] Properties to set
     */
    function DetectMemoryMappingResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DetectMemoryMappingResponse uri.
     * @member {string} uri
     * @memberof DetectMemoryMappingResponse
     * @instance
     */
    DetectMemoryMappingResponse.prototype.uri = "";

    /**
     * DetectMemoryMappingResponse memoryMapping.
     * @member {MemoryMapping} memoryMapping
     * @memberof DetectMemoryMappingResponse
     * @instance
     */
    DetectMemoryMappingResponse.prototype.memoryMapping = 0;

    /**
     * DetectMemoryMappingResponse confidence.
     * @member {boolean} confidence
     * @memberof DetectMemoryMappingResponse
     * @instance
     */
    DetectMemoryMappingResponse.prototype.confidence = false;

    /**
     * DetectMemoryMappingResponse romHeader00FFB0.
     * @member {Uint8Array} romHeader00FFB0
     * @memberof DetectMemoryMappingResponse
     * @instance
     */
    DetectMemoryMappingResponse.prototype.romHeader00FFB0 = $util.newBuffer([]);

    /**
     * Creates a new DetectMemoryMappingResponse instance using the specified properties.
     * @function create
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {IDetectMemoryMappingResponse=} [properties] Properties to set
     * @returns {DetectMemoryMappingResponse} DetectMemoryMappingResponse instance
     */
    DetectMemoryMappingResponse.create = function create(properties) {
        return new DetectMemoryMappingResponse(properties);
    };

    /**
     * Encodes the specified DetectMemoryMappingResponse message. Does not implicitly {@link DetectMemoryMappingResponse.verify|verify} messages.
     * @function encode
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {IDetectMemoryMappingResponse} message DetectMemoryMappingResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DetectMemoryMappingResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.memoryMapping != null && Object.hasOwnProperty.call(message, "memoryMapping"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.memoryMapping);
        if (message.confidence != null && Object.hasOwnProperty.call(message, "confidence"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.confidence);
        if (message.romHeader00FFB0 != null && Object.hasOwnProperty.call(message, "romHeader00FFB0"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.romHeader00FFB0);
        return writer;
    };

    /**
     * Encodes the specified DetectMemoryMappingResponse message, length delimited. Does not implicitly {@link DetectMemoryMappingResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {IDetectMemoryMappingResponse} message DetectMemoryMappingResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DetectMemoryMappingResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DetectMemoryMappingResponse message from the specified reader or buffer.
     * @function decode
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DetectMemoryMappingResponse} DetectMemoryMappingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DetectMemoryMappingResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DetectMemoryMappingResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.memoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.confidence = reader.bool();
                    break;
                }
            case 4: {
                    message.romHeader00FFB0 = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DetectMemoryMappingResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DetectMemoryMappingResponse} DetectMemoryMappingResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DetectMemoryMappingResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DetectMemoryMappingResponse message.
     * @function verify
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DetectMemoryMappingResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.memoryMapping != null && message.hasOwnProperty("memoryMapping"))
            switch (message.memoryMapping) {
            default:
                return "memoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.confidence != null && message.hasOwnProperty("confidence"))
            if (typeof message.confidence !== "boolean")
                return "confidence: boolean expected";
        if (message.romHeader00FFB0 != null && message.hasOwnProperty("romHeader00FFB0"))
            if (!(message.romHeader00FFB0 && typeof message.romHeader00FFB0.length === "number" || $util.isString(message.romHeader00FFB0)))
                return "romHeader00FFB0: buffer expected";
        return null;
    };

    /**
     * Creates a DetectMemoryMappingResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DetectMemoryMappingResponse} DetectMemoryMappingResponse
     */
    DetectMemoryMappingResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.DetectMemoryMappingResponse)
            return object;
        let message = new $root.DetectMemoryMappingResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        switch (object.memoryMapping) {
        default:
            if (typeof object.memoryMapping === "number") {
                message.memoryMapping = object.memoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.memoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.memoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.memoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.memoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.memoryMapping = 4;
            break;
        }
        if (object.confidence != null)
            message.confidence = Boolean(object.confidence);
        if (object.romHeader00FFB0 != null)
            if (typeof object.romHeader00FFB0 === "string")
                $util.base64.decode(object.romHeader00FFB0, message.romHeader00FFB0 = $util.newBuffer($util.base64.length(object.romHeader00FFB0)), 0);
            else if (object.romHeader00FFB0.length >= 0)
                message.romHeader00FFB0 = object.romHeader00FFB0;
        return message;
    };

    /**
     * Creates a plain object from a DetectMemoryMappingResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {DetectMemoryMappingResponse} message DetectMemoryMappingResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DetectMemoryMappingResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.memoryMapping = options.enums === String ? "Unknown" : 0;
            object.confidence = false;
            if (options.bytes === String)
                object.romHeader00FFB0 = "";
            else {
                object.romHeader00FFB0 = [];
                if (options.bytes !== Array)
                    object.romHeader00FFB0 = $util.newBuffer(object.romHeader00FFB0);
            }
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.memoryMapping != null && message.hasOwnProperty("memoryMapping"))
            object.memoryMapping = options.enums === String ? $root.MemoryMapping[message.memoryMapping] === undefined ? message.memoryMapping : $root.MemoryMapping[message.memoryMapping] : message.memoryMapping;
        if (message.confidence != null && message.hasOwnProperty("confidence"))
            object.confidence = message.confidence;
        if (message.romHeader00FFB0 != null && message.hasOwnProperty("romHeader00FFB0"))
            object.romHeader00FFB0 = options.bytes === String ? $util.base64.encode(message.romHeader00FFB0, 0, message.romHeader00FFB0.length) : options.bytes === Array ? Array.prototype.slice.call(message.romHeader00FFB0) : message.romHeader00FFB0;
        return object;
    };

    /**
     * Converts this DetectMemoryMappingResponse to JSON.
     * @function toJSON
     * @memberof DetectMemoryMappingResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DetectMemoryMappingResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DetectMemoryMappingResponse
     * @function getTypeUrl
     * @memberof DetectMemoryMappingResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DetectMemoryMappingResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DetectMemoryMappingResponse";
    };

    return DetectMemoryMappingResponse;
})();

export const ReadMemoryRequest = $root.ReadMemoryRequest = (() => {

    /**
     * Properties of a ReadMemoryRequest.
     * @exports IReadMemoryRequest
     * @interface IReadMemoryRequest
     * @property {number|null} [requestAddress] ReadMemoryRequest requestAddress
     * @property {AddressSpace|null} [requestAddressSpace] ReadMemoryRequest requestAddressSpace
     * @property {MemoryMapping|null} [requestMemoryMapping] ReadMemoryRequest requestMemoryMapping
     * @property {number|null} [size] ReadMemoryRequest size
     */

    /**
     * Constructs a new ReadMemoryRequest.
     * @exports ReadMemoryRequest
     * @classdesc Represents a ReadMemoryRequest.
     * @implements IReadMemoryRequest
     * @constructor
     * @param {IReadMemoryRequest=} [properties] Properties to set
     */
    function ReadMemoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadMemoryRequest requestAddress.
     * @member {number} requestAddress
     * @memberof ReadMemoryRequest
     * @instance
     */
    ReadMemoryRequest.prototype.requestAddress = 0;

    /**
     * ReadMemoryRequest requestAddressSpace.
     * @member {AddressSpace} requestAddressSpace
     * @memberof ReadMemoryRequest
     * @instance
     */
    ReadMemoryRequest.prototype.requestAddressSpace = 0;

    /**
     * ReadMemoryRequest requestMemoryMapping.
     * @member {MemoryMapping} requestMemoryMapping
     * @memberof ReadMemoryRequest
     * @instance
     */
    ReadMemoryRequest.prototype.requestMemoryMapping = 0;

    /**
     * ReadMemoryRequest size.
     * @member {number} size
     * @memberof ReadMemoryRequest
     * @instance
     */
    ReadMemoryRequest.prototype.size = 0;

    /**
     * Creates a new ReadMemoryRequest instance using the specified properties.
     * @function create
     * @memberof ReadMemoryRequest
     * @static
     * @param {IReadMemoryRequest=} [properties] Properties to set
     * @returns {ReadMemoryRequest} ReadMemoryRequest instance
     */
    ReadMemoryRequest.create = function create(properties) {
        return new ReadMemoryRequest(properties);
    };

    /**
     * Encodes the specified ReadMemoryRequest message. Does not implicitly {@link ReadMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof ReadMemoryRequest
     * @static
     * @param {IReadMemoryRequest} message ReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestAddress != null && Object.hasOwnProperty.call(message, "requestAddress"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestAddress);
        if (message.requestAddressSpace != null && Object.hasOwnProperty.call(message, "requestAddressSpace"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestAddressSpace);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
        if (message.requestMemoryMapping != null && Object.hasOwnProperty.call(message, "requestMemoryMapping"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.requestMemoryMapping);
        return writer;
    };

    /**
     * Encodes the specified ReadMemoryRequest message, length delimited. Does not implicitly {@link ReadMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadMemoryRequest
     * @static
     * @param {IReadMemoryRequest} message ReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadMemoryRequest} ReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestAddress = reader.uint32();
                    break;
                }
            case 2: {
                    message.requestAddressSpace = reader.int32();
                    break;
                }
            case 4: {
                    message.requestMemoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.size = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadMemoryRequest} ReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadMemoryRequest message.
     * @function verify
     * @memberof ReadMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            if (!$util.isInteger(message.requestAddress))
                return "requestAddress: integer expected";
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            switch (message.requestAddressSpace) {
            default:
                return "requestAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            switch (message.requestMemoryMapping) {
            default:
                return "requestMemoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size))
                return "size: integer expected";
        return null;
    };

    /**
     * Creates a ReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadMemoryRequest} ReadMemoryRequest
     */
    ReadMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadMemoryRequest)
            return object;
        let message = new $root.ReadMemoryRequest();
        if (object.requestAddress != null)
            message.requestAddress = object.requestAddress >>> 0;
        switch (object.requestAddressSpace) {
        default:
            if (typeof object.requestAddressSpace === "number") {
                message.requestAddressSpace = object.requestAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.requestAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.requestAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.requestAddressSpace = 2;
            break;
        }
        switch (object.requestMemoryMapping) {
        default:
            if (typeof object.requestMemoryMapping === "number") {
                message.requestMemoryMapping = object.requestMemoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.requestMemoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.requestMemoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.requestMemoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.requestMemoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.requestMemoryMapping = 4;
            break;
        }
        if (object.size != null)
            message.size = object.size >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a ReadMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadMemoryRequest
     * @static
     * @param {ReadMemoryRequest} message ReadMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.requestAddress = 0;
            object.requestAddressSpace = options.enums === String ? "FxPakPro" : 0;
            object.size = 0;
            object.requestMemoryMapping = options.enums === String ? "Unknown" : 0;
        }
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            object.requestAddress = message.requestAddress;
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            object.requestAddressSpace = options.enums === String ? $root.AddressSpace[message.requestAddressSpace] === undefined ? message.requestAddressSpace : $root.AddressSpace[message.requestAddressSpace] : message.requestAddressSpace;
        if (message.size != null && message.hasOwnProperty("size"))
            object.size = message.size;
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            object.requestMemoryMapping = options.enums === String ? $root.MemoryMapping[message.requestMemoryMapping] === undefined ? message.requestMemoryMapping : $root.MemoryMapping[message.requestMemoryMapping] : message.requestMemoryMapping;
        return object;
    };

    /**
     * Converts this ReadMemoryRequest to JSON.
     * @function toJSON
     * @memberof ReadMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadMemoryRequest
     * @function getTypeUrl
     * @memberof ReadMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadMemoryRequest";
    };

    return ReadMemoryRequest;
})();

export const ReadMemoryResponse = $root.ReadMemoryResponse = (() => {

    /**
     * Properties of a ReadMemoryResponse.
     * @exports IReadMemoryResponse
     * @interface IReadMemoryResponse
     * @property {number|null} [requestAddress] ReadMemoryResponse requestAddress
     * @property {AddressSpace|null} [requestAddressSpace] ReadMemoryResponse requestAddressSpace
     * @property {MemoryMapping|null} [requestMemoryMapping] ReadMemoryResponse requestMemoryMapping
     * @property {number|null} [deviceAddress] ReadMemoryResponse deviceAddress
     * @property {AddressSpace|null} [deviceAddressSpace] ReadMemoryResponse deviceAddressSpace
     * @property {Uint8Array|null} [data] ReadMemoryResponse data
     */

    /**
     * Constructs a new ReadMemoryResponse.
     * @exports ReadMemoryResponse
     * @classdesc Represents a ReadMemoryResponse.
     * @implements IReadMemoryResponse
     * @constructor
     * @param {IReadMemoryResponse=} [properties] Properties to set
     */
    function ReadMemoryResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadMemoryResponse requestAddress.
     * @member {number} requestAddress
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.requestAddress = 0;

    /**
     * ReadMemoryResponse requestAddressSpace.
     * @member {AddressSpace} requestAddressSpace
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.requestAddressSpace = 0;

    /**
     * ReadMemoryResponse requestMemoryMapping.
     * @member {MemoryMapping} requestMemoryMapping
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.requestMemoryMapping = 0;

    /**
     * ReadMemoryResponse deviceAddress.
     * @member {number} deviceAddress
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.deviceAddress = 0;

    /**
     * ReadMemoryResponse deviceAddressSpace.
     * @member {AddressSpace} deviceAddressSpace
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.deviceAddressSpace = 0;

    /**
     * ReadMemoryResponse data.
     * @member {Uint8Array} data
     * @memberof ReadMemoryResponse
     * @instance
     */
    ReadMemoryResponse.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new ReadMemoryResponse instance using the specified properties.
     * @function create
     * @memberof ReadMemoryResponse
     * @static
     * @param {IReadMemoryResponse=} [properties] Properties to set
     * @returns {ReadMemoryResponse} ReadMemoryResponse instance
     */
    ReadMemoryResponse.create = function create(properties) {
        return new ReadMemoryResponse(properties);
    };

    /**
     * Encodes the specified ReadMemoryResponse message. Does not implicitly {@link ReadMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof ReadMemoryResponse
     * @static
     * @param {IReadMemoryResponse} message ReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestAddress != null && Object.hasOwnProperty.call(message, "requestAddress"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestAddress);
        if (message.requestAddressSpace != null && Object.hasOwnProperty.call(message, "requestAddressSpace"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestAddressSpace);
        if (message.deviceAddress != null && Object.hasOwnProperty.call(message, "deviceAddress"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.deviceAddress);
        if (message.deviceAddressSpace != null && Object.hasOwnProperty.call(message, "deviceAddressSpace"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.deviceAddressSpace);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.data);
        if (message.requestMemoryMapping != null && Object.hasOwnProperty.call(message, "requestMemoryMapping"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.requestMemoryMapping);
        return writer;
    };

    /**
     * Encodes the specified ReadMemoryResponse message, length delimited. Does not implicitly {@link ReadMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadMemoryResponse
     * @static
     * @param {IReadMemoryResponse} message ReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadMemoryResponse} ReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestAddress = reader.uint32();
                    break;
                }
            case 2: {
                    message.requestAddressSpace = reader.int32();
                    break;
                }
            case 6: {
                    message.requestMemoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.deviceAddress = reader.uint32();
                    break;
                }
            case 4: {
                    message.deviceAddressSpace = reader.int32();
                    break;
                }
            case 5: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadMemoryResponse} ReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadMemoryResponse message.
     * @function verify
     * @memberof ReadMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            if (!$util.isInteger(message.requestAddress))
                return "requestAddress: integer expected";
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            switch (message.requestAddressSpace) {
            default:
                return "requestAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            switch (message.requestMemoryMapping) {
            default:
                return "requestMemoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.deviceAddress != null && message.hasOwnProperty("deviceAddress"))
            if (!$util.isInteger(message.deviceAddress))
                return "deviceAddress: integer expected";
        if (message.deviceAddressSpace != null && message.hasOwnProperty("deviceAddressSpace"))
            switch (message.deviceAddressSpace) {
            default:
                return "deviceAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a ReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadMemoryResponse} ReadMemoryResponse
     */
    ReadMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadMemoryResponse)
            return object;
        let message = new $root.ReadMemoryResponse();
        if (object.requestAddress != null)
            message.requestAddress = object.requestAddress >>> 0;
        switch (object.requestAddressSpace) {
        default:
            if (typeof object.requestAddressSpace === "number") {
                message.requestAddressSpace = object.requestAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.requestAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.requestAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.requestAddressSpace = 2;
            break;
        }
        switch (object.requestMemoryMapping) {
        default:
            if (typeof object.requestMemoryMapping === "number") {
                message.requestMemoryMapping = object.requestMemoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.requestMemoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.requestMemoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.requestMemoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.requestMemoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.requestMemoryMapping = 4;
            break;
        }
        if (object.deviceAddress != null)
            message.deviceAddress = object.deviceAddress >>> 0;
        switch (object.deviceAddressSpace) {
        default:
            if (typeof object.deviceAddressSpace === "number") {
                message.deviceAddressSpace = object.deviceAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.deviceAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.deviceAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.deviceAddressSpace = 2;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a ReadMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadMemoryResponse
     * @static
     * @param {ReadMemoryResponse} message ReadMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.requestAddress = 0;
            object.requestAddressSpace = options.enums === String ? "FxPakPro" : 0;
            object.deviceAddress = 0;
            object.deviceAddressSpace = options.enums === String ? "FxPakPro" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.requestMemoryMapping = options.enums === String ? "Unknown" : 0;
        }
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            object.requestAddress = message.requestAddress;
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            object.requestAddressSpace = options.enums === String ? $root.AddressSpace[message.requestAddressSpace] === undefined ? message.requestAddressSpace : $root.AddressSpace[message.requestAddressSpace] : message.requestAddressSpace;
        if (message.deviceAddress != null && message.hasOwnProperty("deviceAddress"))
            object.deviceAddress = message.deviceAddress;
        if (message.deviceAddressSpace != null && message.hasOwnProperty("deviceAddressSpace"))
            object.deviceAddressSpace = options.enums === String ? $root.AddressSpace[message.deviceAddressSpace] === undefined ? message.deviceAddressSpace : $root.AddressSpace[message.deviceAddressSpace] : message.deviceAddressSpace;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            object.requestMemoryMapping = options.enums === String ? $root.MemoryMapping[message.requestMemoryMapping] === undefined ? message.requestMemoryMapping : $root.MemoryMapping[message.requestMemoryMapping] : message.requestMemoryMapping;
        return object;
    };

    /**
     * Converts this ReadMemoryResponse to JSON.
     * @function toJSON
     * @memberof ReadMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadMemoryResponse
     * @function getTypeUrl
     * @memberof ReadMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadMemoryResponse";
    };

    return ReadMemoryResponse;
})();

export const WriteMemoryRequest = $root.WriteMemoryRequest = (() => {

    /**
     * Properties of a WriteMemoryRequest.
     * @exports IWriteMemoryRequest
     * @interface IWriteMemoryRequest
     * @property {number|null} [requestAddress] WriteMemoryRequest requestAddress
     * @property {AddressSpace|null} [requestAddressSpace] WriteMemoryRequest requestAddressSpace
     * @property {MemoryMapping|null} [requestMemoryMapping] WriteMemoryRequest requestMemoryMapping
     * @property {Uint8Array|null} [data] WriteMemoryRequest data
     */

    /**
     * Constructs a new WriteMemoryRequest.
     * @exports WriteMemoryRequest
     * @classdesc Represents a WriteMemoryRequest.
     * @implements IWriteMemoryRequest
     * @constructor
     * @param {IWriteMemoryRequest=} [properties] Properties to set
     */
    function WriteMemoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WriteMemoryRequest requestAddress.
     * @member {number} requestAddress
     * @memberof WriteMemoryRequest
     * @instance
     */
    WriteMemoryRequest.prototype.requestAddress = 0;

    /**
     * WriteMemoryRequest requestAddressSpace.
     * @member {AddressSpace} requestAddressSpace
     * @memberof WriteMemoryRequest
     * @instance
     */
    WriteMemoryRequest.prototype.requestAddressSpace = 0;

    /**
     * WriteMemoryRequest requestMemoryMapping.
     * @member {MemoryMapping} requestMemoryMapping
     * @memberof WriteMemoryRequest
     * @instance
     */
    WriteMemoryRequest.prototype.requestMemoryMapping = 0;

    /**
     * WriteMemoryRequest data.
     * @member {Uint8Array} data
     * @memberof WriteMemoryRequest
     * @instance
     */
    WriteMemoryRequest.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new WriteMemoryRequest instance using the specified properties.
     * @function create
     * @memberof WriteMemoryRequest
     * @static
     * @param {IWriteMemoryRequest=} [properties] Properties to set
     * @returns {WriteMemoryRequest} WriteMemoryRequest instance
     */
    WriteMemoryRequest.create = function create(properties) {
        return new WriteMemoryRequest(properties);
    };

    /**
     * Encodes the specified WriteMemoryRequest message. Does not implicitly {@link WriteMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof WriteMemoryRequest
     * @static
     * @param {IWriteMemoryRequest} message WriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WriteMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestAddress != null && Object.hasOwnProperty.call(message, "requestAddress"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestAddress);
        if (message.requestAddressSpace != null && Object.hasOwnProperty.call(message, "requestAddressSpace"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestAddressSpace);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
        if (message.requestMemoryMapping != null && Object.hasOwnProperty.call(message, "requestMemoryMapping"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.requestMemoryMapping);
        return writer;
    };

    /**
     * Encodes the specified WriteMemoryRequest message, length delimited. Does not implicitly {@link WriteMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WriteMemoryRequest
     * @static
     * @param {IWriteMemoryRequest} message WriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WriteMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WriteMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof WriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WriteMemoryRequest} WriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WriteMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WriteMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestAddress = reader.uint32();
                    break;
                }
            case 2: {
                    message.requestAddressSpace = reader.int32();
                    break;
                }
            case 4: {
                    message.requestMemoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WriteMemoryRequest} WriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WriteMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WriteMemoryRequest message.
     * @function verify
     * @memberof WriteMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WriteMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            if (!$util.isInteger(message.requestAddress))
                return "requestAddress: integer expected";
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            switch (message.requestAddressSpace) {
            default:
                return "requestAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            switch (message.requestMemoryMapping) {
            default:
                return "requestMemoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a WriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WriteMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WriteMemoryRequest} WriteMemoryRequest
     */
    WriteMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.WriteMemoryRequest)
            return object;
        let message = new $root.WriteMemoryRequest();
        if (object.requestAddress != null)
            message.requestAddress = object.requestAddress >>> 0;
        switch (object.requestAddressSpace) {
        default:
            if (typeof object.requestAddressSpace === "number") {
                message.requestAddressSpace = object.requestAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.requestAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.requestAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.requestAddressSpace = 2;
            break;
        }
        switch (object.requestMemoryMapping) {
        default:
            if (typeof object.requestMemoryMapping === "number") {
                message.requestMemoryMapping = object.requestMemoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.requestMemoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.requestMemoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.requestMemoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.requestMemoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.requestMemoryMapping = 4;
            break;
        }
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a WriteMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WriteMemoryRequest
     * @static
     * @param {WriteMemoryRequest} message WriteMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WriteMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.requestAddress = 0;
            object.requestAddressSpace = options.enums === String ? "FxPakPro" : 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
            object.requestMemoryMapping = options.enums === String ? "Unknown" : 0;
        }
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            object.requestAddress = message.requestAddress;
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            object.requestAddressSpace = options.enums === String ? $root.AddressSpace[message.requestAddressSpace] === undefined ? message.requestAddressSpace : $root.AddressSpace[message.requestAddressSpace] : message.requestAddressSpace;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            object.requestMemoryMapping = options.enums === String ? $root.MemoryMapping[message.requestMemoryMapping] === undefined ? message.requestMemoryMapping : $root.MemoryMapping[message.requestMemoryMapping] : message.requestMemoryMapping;
        return object;
    };

    /**
     * Converts this WriteMemoryRequest to JSON.
     * @function toJSON
     * @memberof WriteMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WriteMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WriteMemoryRequest
     * @function getTypeUrl
     * @memberof WriteMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WriteMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WriteMemoryRequest";
    };

    return WriteMemoryRequest;
})();

export const WriteMemoryResponse = $root.WriteMemoryResponse = (() => {

    /**
     * Properties of a WriteMemoryResponse.
     * @exports IWriteMemoryResponse
     * @interface IWriteMemoryResponse
     * @property {number|null} [requestAddress] WriteMemoryResponse requestAddress
     * @property {AddressSpace|null} [requestAddressSpace] WriteMemoryResponse requestAddressSpace
     * @property {MemoryMapping|null} [requestMemoryMapping] WriteMemoryResponse requestMemoryMapping
     * @property {number|null} [deviceAddress] WriteMemoryResponse deviceAddress
     * @property {AddressSpace|null} [deviceAddressSpace] WriteMemoryResponse deviceAddressSpace
     * @property {number|null} [size] WriteMemoryResponse size
     */

    /**
     * Constructs a new WriteMemoryResponse.
     * @exports WriteMemoryResponse
     * @classdesc Represents a WriteMemoryResponse.
     * @implements IWriteMemoryResponse
     * @constructor
     * @param {IWriteMemoryResponse=} [properties] Properties to set
     */
    function WriteMemoryResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * WriteMemoryResponse requestAddress.
     * @member {number} requestAddress
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.requestAddress = 0;

    /**
     * WriteMemoryResponse requestAddressSpace.
     * @member {AddressSpace} requestAddressSpace
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.requestAddressSpace = 0;

    /**
     * WriteMemoryResponse requestMemoryMapping.
     * @member {MemoryMapping} requestMemoryMapping
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.requestMemoryMapping = 0;

    /**
     * WriteMemoryResponse deviceAddress.
     * @member {number} deviceAddress
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.deviceAddress = 0;

    /**
     * WriteMemoryResponse deviceAddressSpace.
     * @member {AddressSpace} deviceAddressSpace
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.deviceAddressSpace = 0;

    /**
     * WriteMemoryResponse size.
     * @member {number} size
     * @memberof WriteMemoryResponse
     * @instance
     */
    WriteMemoryResponse.prototype.size = 0;

    /**
     * Creates a new WriteMemoryResponse instance using the specified properties.
     * @function create
     * @memberof WriteMemoryResponse
     * @static
     * @param {IWriteMemoryResponse=} [properties] Properties to set
     * @returns {WriteMemoryResponse} WriteMemoryResponse instance
     */
    WriteMemoryResponse.create = function create(properties) {
        return new WriteMemoryResponse(properties);
    };

    /**
     * Encodes the specified WriteMemoryResponse message. Does not implicitly {@link WriteMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof WriteMemoryResponse
     * @static
     * @param {IWriteMemoryResponse} message WriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WriteMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.requestAddress != null && Object.hasOwnProperty.call(message, "requestAddress"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.requestAddress);
        if (message.requestAddressSpace != null && Object.hasOwnProperty.call(message, "requestAddressSpace"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.requestAddressSpace);
        if (message.deviceAddress != null && Object.hasOwnProperty.call(message, "deviceAddress"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.deviceAddress);
        if (message.deviceAddressSpace != null && Object.hasOwnProperty.call(message, "deviceAddressSpace"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.deviceAddressSpace);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.size);
        if (message.requestMemoryMapping != null && Object.hasOwnProperty.call(message, "requestMemoryMapping"))
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.requestMemoryMapping);
        return writer;
    };

    /**
     * Encodes the specified WriteMemoryResponse message, length delimited. Does not implicitly {@link WriteMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof WriteMemoryResponse
     * @static
     * @param {IWriteMemoryResponse} message WriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    WriteMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a WriteMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof WriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {WriteMemoryResponse} WriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WriteMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.WriteMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.requestAddress = reader.uint32();
                    break;
                }
            case 2: {
                    message.requestAddressSpace = reader.int32();
                    break;
                }
            case 6: {
                    message.requestMemoryMapping = reader.int32();
                    break;
                }
            case 3: {
                    message.deviceAddress = reader.uint32();
                    break;
                }
            case 4: {
                    message.deviceAddressSpace = reader.int32();
                    break;
                }
            case 5: {
                    message.size = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a WriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof WriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {WriteMemoryResponse} WriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    WriteMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a WriteMemoryResponse message.
     * @function verify
     * @memberof WriteMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    WriteMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            if (!$util.isInteger(message.requestAddress))
                return "requestAddress: integer expected";
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            switch (message.requestAddressSpace) {
            default:
                return "requestAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            switch (message.requestMemoryMapping) {
            default:
                return "requestMemoryMapping: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.deviceAddress != null && message.hasOwnProperty("deviceAddress"))
            if (!$util.isInteger(message.deviceAddress))
                return "deviceAddress: integer expected";
        if (message.deviceAddressSpace != null && message.hasOwnProperty("deviceAddressSpace"))
            switch (message.deviceAddressSpace) {
            default:
                return "deviceAddressSpace: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size))
                return "size: integer expected";
        return null;
    };

    /**
     * Creates a WriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof WriteMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {WriteMemoryResponse} WriteMemoryResponse
     */
    WriteMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.WriteMemoryResponse)
            return object;
        let message = new $root.WriteMemoryResponse();
        if (object.requestAddress != null)
            message.requestAddress = object.requestAddress >>> 0;
        switch (object.requestAddressSpace) {
        default:
            if (typeof object.requestAddressSpace === "number") {
                message.requestAddressSpace = object.requestAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.requestAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.requestAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.requestAddressSpace = 2;
            break;
        }
        switch (object.requestMemoryMapping) {
        default:
            if (typeof object.requestMemoryMapping === "number") {
                message.requestMemoryMapping = object.requestMemoryMapping;
                break;
            }
            break;
        case "Unknown":
        case 0:
            message.requestMemoryMapping = 0;
            break;
        case "HiROM":
        case 1:
            message.requestMemoryMapping = 1;
            break;
        case "LoROM":
        case 2:
            message.requestMemoryMapping = 2;
            break;
        case "ExHiROM":
        case 3:
            message.requestMemoryMapping = 3;
            break;
        case "SA1":
        case 4:
            message.requestMemoryMapping = 4;
            break;
        }
        if (object.deviceAddress != null)
            message.deviceAddress = object.deviceAddress >>> 0;
        switch (object.deviceAddressSpace) {
        default:
            if (typeof object.deviceAddressSpace === "number") {
                message.deviceAddressSpace = object.deviceAddressSpace;
                break;
            }
            break;
        case "FxPakPro":
        case 0:
            message.deviceAddressSpace = 0;
            break;
        case "SnesABus":
        case 1:
            message.deviceAddressSpace = 1;
            break;
        case "Raw":
        case 2:
            message.deviceAddressSpace = 2;
            break;
        }
        if (object.size != null)
            message.size = object.size >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a WriteMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof WriteMemoryResponse
     * @static
     * @param {WriteMemoryResponse} message WriteMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    WriteMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.requestAddress = 0;
            object.requestAddressSpace = options.enums === String ? "FxPakPro" : 0;
            object.deviceAddress = 0;
            object.deviceAddressSpace = options.enums === String ? "FxPakPro" : 0;
            object.size = 0;
            object.requestMemoryMapping = options.enums === String ? "Unknown" : 0;
        }
        if (message.requestAddress != null && message.hasOwnProperty("requestAddress"))
            object.requestAddress = message.requestAddress;
        if (message.requestAddressSpace != null && message.hasOwnProperty("requestAddressSpace"))
            object.requestAddressSpace = options.enums === String ? $root.AddressSpace[message.requestAddressSpace] === undefined ? message.requestAddressSpace : $root.AddressSpace[message.requestAddressSpace] : message.requestAddressSpace;
        if (message.deviceAddress != null && message.hasOwnProperty("deviceAddress"))
            object.deviceAddress = message.deviceAddress;
        if (message.deviceAddressSpace != null && message.hasOwnProperty("deviceAddressSpace"))
            object.deviceAddressSpace = options.enums === String ? $root.AddressSpace[message.deviceAddressSpace] === undefined ? message.deviceAddressSpace : $root.AddressSpace[message.deviceAddressSpace] : message.deviceAddressSpace;
        if (message.size != null && message.hasOwnProperty("size"))
            object.size = message.size;
        if (message.requestMemoryMapping != null && message.hasOwnProperty("requestMemoryMapping"))
            object.requestMemoryMapping = options.enums === String ? $root.MemoryMapping[message.requestMemoryMapping] === undefined ? message.requestMemoryMapping : $root.MemoryMapping[message.requestMemoryMapping] : message.requestMemoryMapping;
        return object;
    };

    /**
     * Converts this WriteMemoryResponse to JSON.
     * @function toJSON
     * @memberof WriteMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    WriteMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for WriteMemoryResponse
     * @function getTypeUrl
     * @memberof WriteMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    WriteMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/WriteMemoryResponse";
    };

    return WriteMemoryResponse;
})();

export const SingleReadMemoryRequest = $root.SingleReadMemoryRequest = (() => {

    /**
     * Properties of a SingleReadMemoryRequest.
     * @exports ISingleReadMemoryRequest
     * @interface ISingleReadMemoryRequest
     * @property {string|null} [uri] SingleReadMemoryRequest uri
     * @property {IReadMemoryRequest|null} [request] SingleReadMemoryRequest request
     */

    /**
     * Constructs a new SingleReadMemoryRequest.
     * @exports SingleReadMemoryRequest
     * @classdesc Represents a SingleReadMemoryRequest.
     * @implements ISingleReadMemoryRequest
     * @constructor
     * @param {ISingleReadMemoryRequest=} [properties] Properties to set
     */
    function SingleReadMemoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SingleReadMemoryRequest uri.
     * @member {string} uri
     * @memberof SingleReadMemoryRequest
     * @instance
     */
    SingleReadMemoryRequest.prototype.uri = "";

    /**
     * SingleReadMemoryRequest request.
     * @member {IReadMemoryRequest|null|undefined} request
     * @memberof SingleReadMemoryRequest
     * @instance
     */
    SingleReadMemoryRequest.prototype.request = null;

    /**
     * Creates a new SingleReadMemoryRequest instance using the specified properties.
     * @function create
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {ISingleReadMemoryRequest=} [properties] Properties to set
     * @returns {SingleReadMemoryRequest} SingleReadMemoryRequest instance
     */
    SingleReadMemoryRequest.create = function create(properties) {
        return new SingleReadMemoryRequest(properties);
    };

    /**
     * Encodes the specified SingleReadMemoryRequest message. Does not implicitly {@link SingleReadMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {ISingleReadMemoryRequest} message SingleReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleReadMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            $root.ReadMemoryRequest.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SingleReadMemoryRequest message, length delimited. Does not implicitly {@link SingleReadMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {ISingleReadMemoryRequest} message SingleReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleReadMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SingleReadMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SingleReadMemoryRequest} SingleReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleReadMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SingleReadMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.request = $root.ReadMemoryRequest.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SingleReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SingleReadMemoryRequest} SingleReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleReadMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SingleReadMemoryRequest message.
     * @function verify
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SingleReadMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            let error = $root.ReadMemoryRequest.verify(message.request);
            if (error)
                return "request." + error;
        }
        return null;
    };

    /**
     * Creates a SingleReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SingleReadMemoryRequest} SingleReadMemoryRequest
     */
    SingleReadMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SingleReadMemoryRequest)
            return object;
        let message = new $root.SingleReadMemoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".SingleReadMemoryRequest.request: object expected");
            message.request = $root.ReadMemoryRequest.fromObject(object.request);
        }
        return message;
    };

    /**
     * Creates a plain object from a SingleReadMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {SingleReadMemoryRequest} message SingleReadMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SingleReadMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.request = null;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.ReadMemoryRequest.toObject(message.request, options);
        return object;
    };

    /**
     * Converts this SingleReadMemoryRequest to JSON.
     * @function toJSON
     * @memberof SingleReadMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SingleReadMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SingleReadMemoryRequest
     * @function getTypeUrl
     * @memberof SingleReadMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SingleReadMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SingleReadMemoryRequest";
    };

    return SingleReadMemoryRequest;
})();

export const SingleReadMemoryResponse = $root.SingleReadMemoryResponse = (() => {

    /**
     * Properties of a SingleReadMemoryResponse.
     * @exports ISingleReadMemoryResponse
     * @interface ISingleReadMemoryResponse
     * @property {string|null} [uri] SingleReadMemoryResponse uri
     * @property {IReadMemoryResponse|null} [response] SingleReadMemoryResponse response
     */

    /**
     * Constructs a new SingleReadMemoryResponse.
     * @exports SingleReadMemoryResponse
     * @classdesc Represents a SingleReadMemoryResponse.
     * @implements ISingleReadMemoryResponse
     * @constructor
     * @param {ISingleReadMemoryResponse=} [properties] Properties to set
     */
    function SingleReadMemoryResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SingleReadMemoryResponse uri.
     * @member {string} uri
     * @memberof SingleReadMemoryResponse
     * @instance
     */
    SingleReadMemoryResponse.prototype.uri = "";

    /**
     * SingleReadMemoryResponse response.
     * @member {IReadMemoryResponse|null|undefined} response
     * @memberof SingleReadMemoryResponse
     * @instance
     */
    SingleReadMemoryResponse.prototype.response = null;

    /**
     * Creates a new SingleReadMemoryResponse instance using the specified properties.
     * @function create
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {ISingleReadMemoryResponse=} [properties] Properties to set
     * @returns {SingleReadMemoryResponse} SingleReadMemoryResponse instance
     */
    SingleReadMemoryResponse.create = function create(properties) {
        return new SingleReadMemoryResponse(properties);
    };

    /**
     * Encodes the specified SingleReadMemoryResponse message. Does not implicitly {@link SingleReadMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {ISingleReadMemoryResponse} message SingleReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleReadMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.ReadMemoryResponse.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SingleReadMemoryResponse message, length delimited. Does not implicitly {@link SingleReadMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {ISingleReadMemoryResponse} message SingleReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleReadMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SingleReadMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SingleReadMemoryResponse} SingleReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleReadMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SingleReadMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.response = $root.ReadMemoryResponse.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SingleReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SingleReadMemoryResponse} SingleReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleReadMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SingleReadMemoryResponse message.
     * @function verify
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SingleReadMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            let error = $root.ReadMemoryResponse.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    /**
     * Creates a SingleReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SingleReadMemoryResponse} SingleReadMemoryResponse
     */
    SingleReadMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SingleReadMemoryResponse)
            return object;
        let message = new $root.SingleReadMemoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".SingleReadMemoryResponse.response: object expected");
            message.response = $root.ReadMemoryResponse.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a SingleReadMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {SingleReadMemoryResponse} message SingleReadMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SingleReadMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.response = null;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.ReadMemoryResponse.toObject(message.response, options);
        return object;
    };

    /**
     * Converts this SingleReadMemoryResponse to JSON.
     * @function toJSON
     * @memberof SingleReadMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SingleReadMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SingleReadMemoryResponse
     * @function getTypeUrl
     * @memberof SingleReadMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SingleReadMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SingleReadMemoryResponse";
    };

    return SingleReadMemoryResponse;
})();

export const SingleWriteMemoryRequest = $root.SingleWriteMemoryRequest = (() => {

    /**
     * Properties of a SingleWriteMemoryRequest.
     * @exports ISingleWriteMemoryRequest
     * @interface ISingleWriteMemoryRequest
     * @property {string|null} [uri] SingleWriteMemoryRequest uri
     * @property {IWriteMemoryRequest|null} [request] SingleWriteMemoryRequest request
     */

    /**
     * Constructs a new SingleWriteMemoryRequest.
     * @exports SingleWriteMemoryRequest
     * @classdesc Represents a SingleWriteMemoryRequest.
     * @implements ISingleWriteMemoryRequest
     * @constructor
     * @param {ISingleWriteMemoryRequest=} [properties] Properties to set
     */
    function SingleWriteMemoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SingleWriteMemoryRequest uri.
     * @member {string} uri
     * @memberof SingleWriteMemoryRequest
     * @instance
     */
    SingleWriteMemoryRequest.prototype.uri = "";

    /**
     * SingleWriteMemoryRequest request.
     * @member {IWriteMemoryRequest|null|undefined} request
     * @memberof SingleWriteMemoryRequest
     * @instance
     */
    SingleWriteMemoryRequest.prototype.request = null;

    /**
     * Creates a new SingleWriteMemoryRequest instance using the specified properties.
     * @function create
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {ISingleWriteMemoryRequest=} [properties] Properties to set
     * @returns {SingleWriteMemoryRequest} SingleWriteMemoryRequest instance
     */
    SingleWriteMemoryRequest.create = function create(properties) {
        return new SingleWriteMemoryRequest(properties);
    };

    /**
     * Encodes the specified SingleWriteMemoryRequest message. Does not implicitly {@link SingleWriteMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {ISingleWriteMemoryRequest} message SingleWriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleWriteMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.request != null && Object.hasOwnProperty.call(message, "request"))
            $root.WriteMemoryRequest.encode(message.request, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SingleWriteMemoryRequest message, length delimited. Does not implicitly {@link SingleWriteMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {ISingleWriteMemoryRequest} message SingleWriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleWriteMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SingleWriteMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SingleWriteMemoryRequest} SingleWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleWriteMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SingleWriteMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.request = $root.WriteMemoryRequest.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SingleWriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SingleWriteMemoryRequest} SingleWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleWriteMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SingleWriteMemoryRequest message.
     * @function verify
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SingleWriteMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.request != null && message.hasOwnProperty("request")) {
            let error = $root.WriteMemoryRequest.verify(message.request);
            if (error)
                return "request." + error;
        }
        return null;
    };

    /**
     * Creates a SingleWriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SingleWriteMemoryRequest} SingleWriteMemoryRequest
     */
    SingleWriteMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.SingleWriteMemoryRequest)
            return object;
        let message = new $root.SingleWriteMemoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.request != null) {
            if (typeof object.request !== "object")
                throw TypeError(".SingleWriteMemoryRequest.request: object expected");
            message.request = $root.WriteMemoryRequest.fromObject(object.request);
        }
        return message;
    };

    /**
     * Creates a plain object from a SingleWriteMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {SingleWriteMemoryRequest} message SingleWriteMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SingleWriteMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.request = null;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.request != null && message.hasOwnProperty("request"))
            object.request = $root.WriteMemoryRequest.toObject(message.request, options);
        return object;
    };

    /**
     * Converts this SingleWriteMemoryRequest to JSON.
     * @function toJSON
     * @memberof SingleWriteMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SingleWriteMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SingleWriteMemoryRequest
     * @function getTypeUrl
     * @memberof SingleWriteMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SingleWriteMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SingleWriteMemoryRequest";
    };

    return SingleWriteMemoryRequest;
})();

export const SingleWriteMemoryResponse = $root.SingleWriteMemoryResponse = (() => {

    /**
     * Properties of a SingleWriteMemoryResponse.
     * @exports ISingleWriteMemoryResponse
     * @interface ISingleWriteMemoryResponse
     * @property {string|null} [uri] SingleWriteMemoryResponse uri
     * @property {IWriteMemoryResponse|null} [response] SingleWriteMemoryResponse response
     */

    /**
     * Constructs a new SingleWriteMemoryResponse.
     * @exports SingleWriteMemoryResponse
     * @classdesc Represents a SingleWriteMemoryResponse.
     * @implements ISingleWriteMemoryResponse
     * @constructor
     * @param {ISingleWriteMemoryResponse=} [properties] Properties to set
     */
    function SingleWriteMemoryResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * SingleWriteMemoryResponse uri.
     * @member {string} uri
     * @memberof SingleWriteMemoryResponse
     * @instance
     */
    SingleWriteMemoryResponse.prototype.uri = "";

    /**
     * SingleWriteMemoryResponse response.
     * @member {IWriteMemoryResponse|null|undefined} response
     * @memberof SingleWriteMemoryResponse
     * @instance
     */
    SingleWriteMemoryResponse.prototype.response = null;

    /**
     * Creates a new SingleWriteMemoryResponse instance using the specified properties.
     * @function create
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {ISingleWriteMemoryResponse=} [properties] Properties to set
     * @returns {SingleWriteMemoryResponse} SingleWriteMemoryResponse instance
     */
    SingleWriteMemoryResponse.create = function create(properties) {
        return new SingleWriteMemoryResponse(properties);
    };

    /**
     * Encodes the specified SingleWriteMemoryResponse message. Does not implicitly {@link SingleWriteMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {ISingleWriteMemoryResponse} message SingleWriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleWriteMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.response != null && Object.hasOwnProperty.call(message, "response"))
            $root.WriteMemoryResponse.encode(message.response, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified SingleWriteMemoryResponse message, length delimited. Does not implicitly {@link SingleWriteMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {ISingleWriteMemoryResponse} message SingleWriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    SingleWriteMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a SingleWriteMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {SingleWriteMemoryResponse} SingleWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleWriteMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.SingleWriteMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.response = $root.WriteMemoryResponse.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a SingleWriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {SingleWriteMemoryResponse} SingleWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    SingleWriteMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a SingleWriteMemoryResponse message.
     * @function verify
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    SingleWriteMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.response != null && message.hasOwnProperty("response")) {
            let error = $root.WriteMemoryResponse.verify(message.response);
            if (error)
                return "response." + error;
        }
        return null;
    };

    /**
     * Creates a SingleWriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {SingleWriteMemoryResponse} SingleWriteMemoryResponse
     */
    SingleWriteMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.SingleWriteMemoryResponse)
            return object;
        let message = new $root.SingleWriteMemoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.response != null) {
            if (typeof object.response !== "object")
                throw TypeError(".SingleWriteMemoryResponse.response: object expected");
            message.response = $root.WriteMemoryResponse.fromObject(object.response);
        }
        return message;
    };

    /**
     * Creates a plain object from a SingleWriteMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {SingleWriteMemoryResponse} message SingleWriteMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    SingleWriteMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.response = null;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.response != null && message.hasOwnProperty("response"))
            object.response = $root.WriteMemoryResponse.toObject(message.response, options);
        return object;
    };

    /**
     * Converts this SingleWriteMemoryResponse to JSON.
     * @function toJSON
     * @memberof SingleWriteMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    SingleWriteMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for SingleWriteMemoryResponse
     * @function getTypeUrl
     * @memberof SingleWriteMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    SingleWriteMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/SingleWriteMemoryResponse";
    };

    return SingleWriteMemoryResponse;
})();

export const MultiReadMemoryRequest = $root.MultiReadMemoryRequest = (() => {

    /**
     * Properties of a MultiReadMemoryRequest.
     * @exports IMultiReadMemoryRequest
     * @interface IMultiReadMemoryRequest
     * @property {string|null} [uri] MultiReadMemoryRequest uri
     * @property {Array.<IReadMemoryRequest>|null} [requests] MultiReadMemoryRequest requests
     */

    /**
     * Constructs a new MultiReadMemoryRequest.
     * @exports MultiReadMemoryRequest
     * @classdesc Represents a MultiReadMemoryRequest.
     * @implements IMultiReadMemoryRequest
     * @constructor
     * @param {IMultiReadMemoryRequest=} [properties] Properties to set
     */
    function MultiReadMemoryRequest(properties) {
        this.requests = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MultiReadMemoryRequest uri.
     * @member {string} uri
     * @memberof MultiReadMemoryRequest
     * @instance
     */
    MultiReadMemoryRequest.prototype.uri = "";

    /**
     * MultiReadMemoryRequest requests.
     * @member {Array.<IReadMemoryRequest>} requests
     * @memberof MultiReadMemoryRequest
     * @instance
     */
    MultiReadMemoryRequest.prototype.requests = $util.emptyArray;

    /**
     * Creates a new MultiReadMemoryRequest instance using the specified properties.
     * @function create
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {IMultiReadMemoryRequest=} [properties] Properties to set
     * @returns {MultiReadMemoryRequest} MultiReadMemoryRequest instance
     */
    MultiReadMemoryRequest.create = function create(properties) {
        return new MultiReadMemoryRequest(properties);
    };

    /**
     * Encodes the specified MultiReadMemoryRequest message. Does not implicitly {@link MultiReadMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {IMultiReadMemoryRequest} message MultiReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiReadMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.requests != null && message.requests.length)
            for (let i = 0; i < message.requests.length; ++i)
                $root.ReadMemoryRequest.encode(message.requests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MultiReadMemoryRequest message, length delimited. Does not implicitly {@link MultiReadMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {IMultiReadMemoryRequest} message MultiReadMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiReadMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MultiReadMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MultiReadMemoryRequest} MultiReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiReadMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MultiReadMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.ReadMemoryRequest.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MultiReadMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MultiReadMemoryRequest} MultiReadMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiReadMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MultiReadMemoryRequest message.
     * @function verify
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MultiReadMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.requests != null && message.hasOwnProperty("requests")) {
            if (!Array.isArray(message.requests))
                return "requests: array expected";
            for (let i = 0; i < message.requests.length; ++i) {
                let error = $root.ReadMemoryRequest.verify(message.requests[i]);
                if (error)
                    return "requests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MultiReadMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MultiReadMemoryRequest} MultiReadMemoryRequest
     */
    MultiReadMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MultiReadMemoryRequest)
            return object;
        let message = new $root.MultiReadMemoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.requests) {
            if (!Array.isArray(object.requests))
                throw TypeError(".MultiReadMemoryRequest.requests: array expected");
            message.requests = [];
            for (let i = 0; i < object.requests.length; ++i) {
                if (typeof object.requests[i] !== "object")
                    throw TypeError(".MultiReadMemoryRequest.requests: object expected");
                message.requests[i] = $root.ReadMemoryRequest.fromObject(object.requests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MultiReadMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {MultiReadMemoryRequest} message MultiReadMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MultiReadMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.requests = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.requests && message.requests.length) {
            object.requests = [];
            for (let j = 0; j < message.requests.length; ++j)
                object.requests[j] = $root.ReadMemoryRequest.toObject(message.requests[j], options);
        }
        return object;
    };

    /**
     * Converts this MultiReadMemoryRequest to JSON.
     * @function toJSON
     * @memberof MultiReadMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MultiReadMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MultiReadMemoryRequest
     * @function getTypeUrl
     * @memberof MultiReadMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MultiReadMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MultiReadMemoryRequest";
    };

    return MultiReadMemoryRequest;
})();

export const MultiReadMemoryResponse = $root.MultiReadMemoryResponse = (() => {

    /**
     * Properties of a MultiReadMemoryResponse.
     * @exports IMultiReadMemoryResponse
     * @interface IMultiReadMemoryResponse
     * @property {string|null} [uri] MultiReadMemoryResponse uri
     * @property {Array.<IReadMemoryResponse>|null} [responses] MultiReadMemoryResponse responses
     */

    /**
     * Constructs a new MultiReadMemoryResponse.
     * @exports MultiReadMemoryResponse
     * @classdesc Represents a MultiReadMemoryResponse.
     * @implements IMultiReadMemoryResponse
     * @constructor
     * @param {IMultiReadMemoryResponse=} [properties] Properties to set
     */
    function MultiReadMemoryResponse(properties) {
        this.responses = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MultiReadMemoryResponse uri.
     * @member {string} uri
     * @memberof MultiReadMemoryResponse
     * @instance
     */
    MultiReadMemoryResponse.prototype.uri = "";

    /**
     * MultiReadMemoryResponse responses.
     * @member {Array.<IReadMemoryResponse>} responses
     * @memberof MultiReadMemoryResponse
     * @instance
     */
    MultiReadMemoryResponse.prototype.responses = $util.emptyArray;

    /**
     * Creates a new MultiReadMemoryResponse instance using the specified properties.
     * @function create
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {IMultiReadMemoryResponse=} [properties] Properties to set
     * @returns {MultiReadMemoryResponse} MultiReadMemoryResponse instance
     */
    MultiReadMemoryResponse.create = function create(properties) {
        return new MultiReadMemoryResponse(properties);
    };

    /**
     * Encodes the specified MultiReadMemoryResponse message. Does not implicitly {@link MultiReadMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {IMultiReadMemoryResponse} message MultiReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiReadMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.responses != null && message.responses.length)
            for (let i = 0; i < message.responses.length; ++i)
                $root.ReadMemoryResponse.encode(message.responses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MultiReadMemoryResponse message, length delimited. Does not implicitly {@link MultiReadMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {IMultiReadMemoryResponse} message MultiReadMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiReadMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MultiReadMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MultiReadMemoryResponse} MultiReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiReadMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MultiReadMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.responses && message.responses.length))
                        message.responses = [];
                    message.responses.push($root.ReadMemoryResponse.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MultiReadMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MultiReadMemoryResponse} MultiReadMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiReadMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MultiReadMemoryResponse message.
     * @function verify
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MultiReadMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.responses != null && message.hasOwnProperty("responses")) {
            if (!Array.isArray(message.responses))
                return "responses: array expected";
            for (let i = 0; i < message.responses.length; ++i) {
                let error = $root.ReadMemoryResponse.verify(message.responses[i]);
                if (error)
                    return "responses." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MultiReadMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MultiReadMemoryResponse} MultiReadMemoryResponse
     */
    MultiReadMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MultiReadMemoryResponse)
            return object;
        let message = new $root.MultiReadMemoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.responses) {
            if (!Array.isArray(object.responses))
                throw TypeError(".MultiReadMemoryResponse.responses: array expected");
            message.responses = [];
            for (let i = 0; i < object.responses.length; ++i) {
                if (typeof object.responses[i] !== "object")
                    throw TypeError(".MultiReadMemoryResponse.responses: object expected");
                message.responses[i] = $root.ReadMemoryResponse.fromObject(object.responses[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MultiReadMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {MultiReadMemoryResponse} message MultiReadMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MultiReadMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.responses = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.responses && message.responses.length) {
            object.responses = [];
            for (let j = 0; j < message.responses.length; ++j)
                object.responses[j] = $root.ReadMemoryResponse.toObject(message.responses[j], options);
        }
        return object;
    };

    /**
     * Converts this MultiReadMemoryResponse to JSON.
     * @function toJSON
     * @memberof MultiReadMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MultiReadMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MultiReadMemoryResponse
     * @function getTypeUrl
     * @memberof MultiReadMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MultiReadMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MultiReadMemoryResponse";
    };

    return MultiReadMemoryResponse;
})();

export const MultiWriteMemoryRequest = $root.MultiWriteMemoryRequest = (() => {

    /**
     * Properties of a MultiWriteMemoryRequest.
     * @exports IMultiWriteMemoryRequest
     * @interface IMultiWriteMemoryRequest
     * @property {string|null} [uri] MultiWriteMemoryRequest uri
     * @property {Array.<IWriteMemoryRequest>|null} [requests] MultiWriteMemoryRequest requests
     */

    /**
     * Constructs a new MultiWriteMemoryRequest.
     * @exports MultiWriteMemoryRequest
     * @classdesc Represents a MultiWriteMemoryRequest.
     * @implements IMultiWriteMemoryRequest
     * @constructor
     * @param {IMultiWriteMemoryRequest=} [properties] Properties to set
     */
    function MultiWriteMemoryRequest(properties) {
        this.requests = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MultiWriteMemoryRequest uri.
     * @member {string} uri
     * @memberof MultiWriteMemoryRequest
     * @instance
     */
    MultiWriteMemoryRequest.prototype.uri = "";

    /**
     * MultiWriteMemoryRequest requests.
     * @member {Array.<IWriteMemoryRequest>} requests
     * @memberof MultiWriteMemoryRequest
     * @instance
     */
    MultiWriteMemoryRequest.prototype.requests = $util.emptyArray;

    /**
     * Creates a new MultiWriteMemoryRequest instance using the specified properties.
     * @function create
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {IMultiWriteMemoryRequest=} [properties] Properties to set
     * @returns {MultiWriteMemoryRequest} MultiWriteMemoryRequest instance
     */
    MultiWriteMemoryRequest.create = function create(properties) {
        return new MultiWriteMemoryRequest(properties);
    };

    /**
     * Encodes the specified MultiWriteMemoryRequest message. Does not implicitly {@link MultiWriteMemoryRequest.verify|verify} messages.
     * @function encode
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {IMultiWriteMemoryRequest} message MultiWriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiWriteMemoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.requests != null && message.requests.length)
            for (let i = 0; i < message.requests.length; ++i)
                $root.WriteMemoryRequest.encode(message.requests[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MultiWriteMemoryRequest message, length delimited. Does not implicitly {@link MultiWriteMemoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {IMultiWriteMemoryRequest} message MultiWriteMemoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiWriteMemoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MultiWriteMemoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MultiWriteMemoryRequest} MultiWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiWriteMemoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MultiWriteMemoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.requests && message.requests.length))
                        message.requests = [];
                    message.requests.push($root.WriteMemoryRequest.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MultiWriteMemoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MultiWriteMemoryRequest} MultiWriteMemoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiWriteMemoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MultiWriteMemoryRequest message.
     * @function verify
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MultiWriteMemoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.requests != null && message.hasOwnProperty("requests")) {
            if (!Array.isArray(message.requests))
                return "requests: array expected";
            for (let i = 0; i < message.requests.length; ++i) {
                let error = $root.WriteMemoryRequest.verify(message.requests[i]);
                if (error)
                    return "requests." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MultiWriteMemoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MultiWriteMemoryRequest} MultiWriteMemoryRequest
     */
    MultiWriteMemoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MultiWriteMemoryRequest)
            return object;
        let message = new $root.MultiWriteMemoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.requests) {
            if (!Array.isArray(object.requests))
                throw TypeError(".MultiWriteMemoryRequest.requests: array expected");
            message.requests = [];
            for (let i = 0; i < object.requests.length; ++i) {
                if (typeof object.requests[i] !== "object")
                    throw TypeError(".MultiWriteMemoryRequest.requests: object expected");
                message.requests[i] = $root.WriteMemoryRequest.fromObject(object.requests[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MultiWriteMemoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {MultiWriteMemoryRequest} message MultiWriteMemoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MultiWriteMemoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.requests = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.requests && message.requests.length) {
            object.requests = [];
            for (let j = 0; j < message.requests.length; ++j)
                object.requests[j] = $root.WriteMemoryRequest.toObject(message.requests[j], options);
        }
        return object;
    };

    /**
     * Converts this MultiWriteMemoryRequest to JSON.
     * @function toJSON
     * @memberof MultiWriteMemoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MultiWriteMemoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MultiWriteMemoryRequest
     * @function getTypeUrl
     * @memberof MultiWriteMemoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MultiWriteMemoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MultiWriteMemoryRequest";
    };

    return MultiWriteMemoryRequest;
})();

export const MultiWriteMemoryResponse = $root.MultiWriteMemoryResponse = (() => {

    /**
     * Properties of a MultiWriteMemoryResponse.
     * @exports IMultiWriteMemoryResponse
     * @interface IMultiWriteMemoryResponse
     * @property {string|null} [uri] MultiWriteMemoryResponse uri
     * @property {Array.<IWriteMemoryResponse>|null} [responses] MultiWriteMemoryResponse responses
     */

    /**
     * Constructs a new MultiWriteMemoryResponse.
     * @exports MultiWriteMemoryResponse
     * @classdesc Represents a MultiWriteMemoryResponse.
     * @implements IMultiWriteMemoryResponse
     * @constructor
     * @param {IMultiWriteMemoryResponse=} [properties] Properties to set
     */
    function MultiWriteMemoryResponse(properties) {
        this.responses = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MultiWriteMemoryResponse uri.
     * @member {string} uri
     * @memberof MultiWriteMemoryResponse
     * @instance
     */
    MultiWriteMemoryResponse.prototype.uri = "";

    /**
     * MultiWriteMemoryResponse responses.
     * @member {Array.<IWriteMemoryResponse>} responses
     * @memberof MultiWriteMemoryResponse
     * @instance
     */
    MultiWriteMemoryResponse.prototype.responses = $util.emptyArray;

    /**
     * Creates a new MultiWriteMemoryResponse instance using the specified properties.
     * @function create
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {IMultiWriteMemoryResponse=} [properties] Properties to set
     * @returns {MultiWriteMemoryResponse} MultiWriteMemoryResponse instance
     */
    MultiWriteMemoryResponse.create = function create(properties) {
        return new MultiWriteMemoryResponse(properties);
    };

    /**
     * Encodes the specified MultiWriteMemoryResponse message. Does not implicitly {@link MultiWriteMemoryResponse.verify|verify} messages.
     * @function encode
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {IMultiWriteMemoryResponse} message MultiWriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiWriteMemoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.responses != null && message.responses.length)
            for (let i = 0; i < message.responses.length; ++i)
                $root.WriteMemoryResponse.encode(message.responses[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MultiWriteMemoryResponse message, length delimited. Does not implicitly {@link MultiWriteMemoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {IMultiWriteMemoryResponse} message MultiWriteMemoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MultiWriteMemoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MultiWriteMemoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MultiWriteMemoryResponse} MultiWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiWriteMemoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MultiWriteMemoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.responses && message.responses.length))
                        message.responses = [];
                    message.responses.push($root.WriteMemoryResponse.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MultiWriteMemoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MultiWriteMemoryResponse} MultiWriteMemoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MultiWriteMemoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MultiWriteMemoryResponse message.
     * @function verify
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MultiWriteMemoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.responses != null && message.hasOwnProperty("responses")) {
            if (!Array.isArray(message.responses))
                return "responses: array expected";
            for (let i = 0; i < message.responses.length; ++i) {
                let error = $root.WriteMemoryResponse.verify(message.responses[i]);
                if (error)
                    return "responses." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MultiWriteMemoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MultiWriteMemoryResponse} MultiWriteMemoryResponse
     */
    MultiWriteMemoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MultiWriteMemoryResponse)
            return object;
        let message = new $root.MultiWriteMemoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.responses) {
            if (!Array.isArray(object.responses))
                throw TypeError(".MultiWriteMemoryResponse.responses: array expected");
            message.responses = [];
            for (let i = 0; i < object.responses.length; ++i) {
                if (typeof object.responses[i] !== "object")
                    throw TypeError(".MultiWriteMemoryResponse.responses: object expected");
                message.responses[i] = $root.WriteMemoryResponse.fromObject(object.responses[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MultiWriteMemoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {MultiWriteMemoryResponse} message MultiWriteMemoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MultiWriteMemoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.responses = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.responses && message.responses.length) {
            object.responses = [];
            for (let j = 0; j < message.responses.length; ++j)
                object.responses[j] = $root.WriteMemoryResponse.toObject(message.responses[j], options);
        }
        return object;
    };

    /**
     * Converts this MultiWriteMemoryResponse to JSON.
     * @function toJSON
     * @memberof MultiWriteMemoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MultiWriteMemoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MultiWriteMemoryResponse
     * @function getTypeUrl
     * @memberof MultiWriteMemoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MultiWriteMemoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MultiWriteMemoryResponse";
    };

    return MultiWriteMemoryResponse;
})();

export const ReadDirectoryRequest = $root.ReadDirectoryRequest = (() => {

    /**
     * Properties of a ReadDirectoryRequest.
     * @exports IReadDirectoryRequest
     * @interface IReadDirectoryRequest
     * @property {string|null} [uri] ReadDirectoryRequest uri
     * @property {string|null} [path] ReadDirectoryRequest path
     */

    /**
     * Constructs a new ReadDirectoryRequest.
     * @exports ReadDirectoryRequest
     * @classdesc Represents a ReadDirectoryRequest.
     * @implements IReadDirectoryRequest
     * @constructor
     * @param {IReadDirectoryRequest=} [properties] Properties to set
     */
    function ReadDirectoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadDirectoryRequest uri.
     * @member {string} uri
     * @memberof ReadDirectoryRequest
     * @instance
     */
    ReadDirectoryRequest.prototype.uri = "";

    /**
     * ReadDirectoryRequest path.
     * @member {string} path
     * @memberof ReadDirectoryRequest
     * @instance
     */
    ReadDirectoryRequest.prototype.path = "";

    /**
     * Creates a new ReadDirectoryRequest instance using the specified properties.
     * @function create
     * @memberof ReadDirectoryRequest
     * @static
     * @param {IReadDirectoryRequest=} [properties] Properties to set
     * @returns {ReadDirectoryRequest} ReadDirectoryRequest instance
     */
    ReadDirectoryRequest.create = function create(properties) {
        return new ReadDirectoryRequest(properties);
    };

    /**
     * Encodes the specified ReadDirectoryRequest message. Does not implicitly {@link ReadDirectoryRequest.verify|verify} messages.
     * @function encode
     * @memberof ReadDirectoryRequest
     * @static
     * @param {IReadDirectoryRequest} message ReadDirectoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDirectoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified ReadDirectoryRequest message, length delimited. Does not implicitly {@link ReadDirectoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadDirectoryRequest
     * @static
     * @param {IReadDirectoryRequest} message ReadDirectoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDirectoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadDirectoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof ReadDirectoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadDirectoryRequest} ReadDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDirectoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadDirectoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadDirectoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadDirectoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadDirectoryRequest} ReadDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDirectoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadDirectoryRequest message.
     * @function verify
     * @memberof ReadDirectoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadDirectoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a ReadDirectoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadDirectoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadDirectoryRequest} ReadDirectoryRequest
     */
    ReadDirectoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadDirectoryRequest)
            return object;
        let message = new $root.ReadDirectoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a ReadDirectoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadDirectoryRequest
     * @static
     * @param {ReadDirectoryRequest} message ReadDirectoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadDirectoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this ReadDirectoryRequest to JSON.
     * @function toJSON
     * @memberof ReadDirectoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadDirectoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadDirectoryRequest
     * @function getTypeUrl
     * @memberof ReadDirectoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadDirectoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadDirectoryRequest";
    };

    return ReadDirectoryRequest;
})();

/**
 * DirEntryType enum.
 * @exports DirEntryType
 * @enum {number}
 * @property {number} Directory=0 Directory value
 * @property {number} File=1 File value
 */
export const DirEntryType = $root.DirEntryType = (() => {
    const valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "Directory"] = 0;
    values[valuesById[1] = "File"] = 1;
    return values;
})();

export const DirEntry = $root.DirEntry = (() => {

    /**
     * Properties of a DirEntry.
     * @exports IDirEntry
     * @interface IDirEntry
     * @property {string|null} [name] DirEntry name
     * @property {DirEntryType|null} [type] DirEntry type
     */

    /**
     * Constructs a new DirEntry.
     * @exports DirEntry
     * @classdesc Represents a DirEntry.
     * @implements IDirEntry
     * @constructor
     * @param {IDirEntry=} [properties] Properties to set
     */
    function DirEntry(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * DirEntry name.
     * @member {string} name
     * @memberof DirEntry
     * @instance
     */
    DirEntry.prototype.name = "";

    /**
     * DirEntry type.
     * @member {DirEntryType} type
     * @memberof DirEntry
     * @instance
     */
    DirEntry.prototype.type = 0;

    /**
     * Creates a new DirEntry instance using the specified properties.
     * @function create
     * @memberof DirEntry
     * @static
     * @param {IDirEntry=} [properties] Properties to set
     * @returns {DirEntry} DirEntry instance
     */
    DirEntry.create = function create(properties) {
        return new DirEntry(properties);
    };

    /**
     * Encodes the specified DirEntry message. Does not implicitly {@link DirEntry.verify|verify} messages.
     * @function encode
     * @memberof DirEntry
     * @static
     * @param {IDirEntry} message DirEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DirEntry.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
        return writer;
    };

    /**
     * Encodes the specified DirEntry message, length delimited. Does not implicitly {@link DirEntry.verify|verify} messages.
     * @function encodeDelimited
     * @memberof DirEntry
     * @static
     * @param {IDirEntry} message DirEntry message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    DirEntry.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a DirEntry message from the specified reader or buffer.
     * @function decode
     * @memberof DirEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {DirEntry} DirEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DirEntry.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.DirEntry();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.type = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a DirEntry message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof DirEntry
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {DirEntry} DirEntry
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    DirEntry.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a DirEntry message.
     * @function verify
     * @memberof DirEntry
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    DirEntry.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a DirEntry message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof DirEntry
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {DirEntry} DirEntry
     */
    DirEntry.fromObject = function fromObject(object) {
        if (object instanceof $root.DirEntry)
            return object;
        let message = new $root.DirEntry();
        if (object.name != null)
            message.name = String(object.name);
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "Directory":
        case 0:
            message.type = 0;
            break;
        case "File":
        case 1:
            message.type = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a DirEntry message. Also converts values to other types if specified.
     * @function toObject
     * @memberof DirEntry
     * @static
     * @param {DirEntry} message DirEntry
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    DirEntry.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.name = "";
            object.type = options.enums === String ? "Directory" : 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.DirEntryType[message.type] === undefined ? message.type : $root.DirEntryType[message.type] : message.type;
        return object;
    };

    /**
     * Converts this DirEntry to JSON.
     * @function toJSON
     * @memberof DirEntry
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    DirEntry.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for DirEntry
     * @function getTypeUrl
     * @memberof DirEntry
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    DirEntry.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/DirEntry";
    };

    return DirEntry;
})();

export const ReadDirectoryResponse = $root.ReadDirectoryResponse = (() => {

    /**
     * Properties of a ReadDirectoryResponse.
     * @exports IReadDirectoryResponse
     * @interface IReadDirectoryResponse
     * @property {string|null} [uri] ReadDirectoryResponse uri
     * @property {string|null} [path] ReadDirectoryResponse path
     * @property {Array.<IDirEntry>|null} [entries] ReadDirectoryResponse entries
     */

    /**
     * Constructs a new ReadDirectoryResponse.
     * @exports ReadDirectoryResponse
     * @classdesc Represents a ReadDirectoryResponse.
     * @implements IReadDirectoryResponse
     * @constructor
     * @param {IReadDirectoryResponse=} [properties] Properties to set
     */
    function ReadDirectoryResponse(properties) {
        this.entries = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * ReadDirectoryResponse uri.
     * @member {string} uri
     * @memberof ReadDirectoryResponse
     * @instance
     */
    ReadDirectoryResponse.prototype.uri = "";

    /**
     * ReadDirectoryResponse path.
     * @member {string} path
     * @memberof ReadDirectoryResponse
     * @instance
     */
    ReadDirectoryResponse.prototype.path = "";

    /**
     * ReadDirectoryResponse entries.
     * @member {Array.<IDirEntry>} entries
     * @memberof ReadDirectoryResponse
     * @instance
     */
    ReadDirectoryResponse.prototype.entries = $util.emptyArray;

    /**
     * Creates a new ReadDirectoryResponse instance using the specified properties.
     * @function create
     * @memberof ReadDirectoryResponse
     * @static
     * @param {IReadDirectoryResponse=} [properties] Properties to set
     * @returns {ReadDirectoryResponse} ReadDirectoryResponse instance
     */
    ReadDirectoryResponse.create = function create(properties) {
        return new ReadDirectoryResponse(properties);
    };

    /**
     * Encodes the specified ReadDirectoryResponse message. Does not implicitly {@link ReadDirectoryResponse.verify|verify} messages.
     * @function encode
     * @memberof ReadDirectoryResponse
     * @static
     * @param {IReadDirectoryResponse} message ReadDirectoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDirectoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.entries != null && message.entries.length)
            for (let i = 0; i < message.entries.length; ++i)
                $root.DirEntry.encode(message.entries[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified ReadDirectoryResponse message, length delimited. Does not implicitly {@link ReadDirectoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof ReadDirectoryResponse
     * @static
     * @param {IReadDirectoryResponse} message ReadDirectoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    ReadDirectoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a ReadDirectoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof ReadDirectoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {ReadDirectoryResponse} ReadDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDirectoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.ReadDirectoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    if (!(message.entries && message.entries.length))
                        message.entries = [];
                    message.entries.push($root.DirEntry.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a ReadDirectoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof ReadDirectoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {ReadDirectoryResponse} ReadDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    ReadDirectoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a ReadDirectoryResponse message.
     * @function verify
     * @memberof ReadDirectoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    ReadDirectoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.entries != null && message.hasOwnProperty("entries")) {
            if (!Array.isArray(message.entries))
                return "entries: array expected";
            for (let i = 0; i < message.entries.length; ++i) {
                let error = $root.DirEntry.verify(message.entries[i]);
                if (error)
                    return "entries." + error;
            }
        }
        return null;
    };

    /**
     * Creates a ReadDirectoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof ReadDirectoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {ReadDirectoryResponse} ReadDirectoryResponse
     */
    ReadDirectoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.ReadDirectoryResponse)
            return object;
        let message = new $root.ReadDirectoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.entries) {
            if (!Array.isArray(object.entries))
                throw TypeError(".ReadDirectoryResponse.entries: array expected");
            message.entries = [];
            for (let i = 0; i < object.entries.length; ++i) {
                if (typeof object.entries[i] !== "object")
                    throw TypeError(".ReadDirectoryResponse.entries: object expected");
                message.entries[i] = $root.DirEntry.fromObject(object.entries[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a ReadDirectoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof ReadDirectoryResponse
     * @static
     * @param {ReadDirectoryResponse} message ReadDirectoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    ReadDirectoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.entries = [];
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.entries && message.entries.length) {
            object.entries = [];
            for (let j = 0; j < message.entries.length; ++j)
                object.entries[j] = $root.DirEntry.toObject(message.entries[j], options);
        }
        return object;
    };

    /**
     * Converts this ReadDirectoryResponse to JSON.
     * @function toJSON
     * @memberof ReadDirectoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    ReadDirectoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for ReadDirectoryResponse
     * @function getTypeUrl
     * @memberof ReadDirectoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    ReadDirectoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/ReadDirectoryResponse";
    };

    return ReadDirectoryResponse;
})();

export const MakeDirectoryRequest = $root.MakeDirectoryRequest = (() => {

    /**
     * Properties of a MakeDirectoryRequest.
     * @exports IMakeDirectoryRequest
     * @interface IMakeDirectoryRequest
     * @property {string|null} [uri] MakeDirectoryRequest uri
     * @property {string|null} [path] MakeDirectoryRequest path
     */

    /**
     * Constructs a new MakeDirectoryRequest.
     * @exports MakeDirectoryRequest
     * @classdesc Represents a MakeDirectoryRequest.
     * @implements IMakeDirectoryRequest
     * @constructor
     * @param {IMakeDirectoryRequest=} [properties] Properties to set
     */
    function MakeDirectoryRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MakeDirectoryRequest uri.
     * @member {string} uri
     * @memberof MakeDirectoryRequest
     * @instance
     */
    MakeDirectoryRequest.prototype.uri = "";

    /**
     * MakeDirectoryRequest path.
     * @member {string} path
     * @memberof MakeDirectoryRequest
     * @instance
     */
    MakeDirectoryRequest.prototype.path = "";

    /**
     * Creates a new MakeDirectoryRequest instance using the specified properties.
     * @function create
     * @memberof MakeDirectoryRequest
     * @static
     * @param {IMakeDirectoryRequest=} [properties] Properties to set
     * @returns {MakeDirectoryRequest} MakeDirectoryRequest instance
     */
    MakeDirectoryRequest.create = function create(properties) {
        return new MakeDirectoryRequest(properties);
    };

    /**
     * Encodes the specified MakeDirectoryRequest message. Does not implicitly {@link MakeDirectoryRequest.verify|verify} messages.
     * @function encode
     * @memberof MakeDirectoryRequest
     * @static
     * @param {IMakeDirectoryRequest} message MakeDirectoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeDirectoryRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified MakeDirectoryRequest message, length delimited. Does not implicitly {@link MakeDirectoryRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeDirectoryRequest
     * @static
     * @param {IMakeDirectoryRequest} message MakeDirectoryRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeDirectoryRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeDirectoryRequest message from the specified reader or buffer.
     * @function decode
     * @memberof MakeDirectoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeDirectoryRequest} MakeDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeDirectoryRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeDirectoryRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeDirectoryRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeDirectoryRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeDirectoryRequest} MakeDirectoryRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeDirectoryRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MakeDirectoryRequest message.
     * @function verify
     * @memberof MakeDirectoryRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MakeDirectoryRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a MakeDirectoryRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeDirectoryRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeDirectoryRequest} MakeDirectoryRequest
     */
    MakeDirectoryRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeDirectoryRequest)
            return object;
        let message = new $root.MakeDirectoryRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a MakeDirectoryRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeDirectoryRequest
     * @static
     * @param {MakeDirectoryRequest} message MakeDirectoryRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeDirectoryRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this MakeDirectoryRequest to JSON.
     * @function toJSON
     * @memberof MakeDirectoryRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeDirectoryRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MakeDirectoryRequest
     * @function getTypeUrl
     * @memberof MakeDirectoryRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeDirectoryRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeDirectoryRequest";
    };

    return MakeDirectoryRequest;
})();

export const MakeDirectoryResponse = $root.MakeDirectoryResponse = (() => {

    /**
     * Properties of a MakeDirectoryResponse.
     * @exports IMakeDirectoryResponse
     * @interface IMakeDirectoryResponse
     * @property {string|null} [uri] MakeDirectoryResponse uri
     * @property {string|null} [path] MakeDirectoryResponse path
     */

    /**
     * Constructs a new MakeDirectoryResponse.
     * @exports MakeDirectoryResponse
     * @classdesc Represents a MakeDirectoryResponse.
     * @implements IMakeDirectoryResponse
     * @constructor
     * @param {IMakeDirectoryResponse=} [properties] Properties to set
     */
    function MakeDirectoryResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MakeDirectoryResponse uri.
     * @member {string} uri
     * @memberof MakeDirectoryResponse
     * @instance
     */
    MakeDirectoryResponse.prototype.uri = "";

    /**
     * MakeDirectoryResponse path.
     * @member {string} path
     * @memberof MakeDirectoryResponse
     * @instance
     */
    MakeDirectoryResponse.prototype.path = "";

    /**
     * Creates a new MakeDirectoryResponse instance using the specified properties.
     * @function create
     * @memberof MakeDirectoryResponse
     * @static
     * @param {IMakeDirectoryResponse=} [properties] Properties to set
     * @returns {MakeDirectoryResponse} MakeDirectoryResponse instance
     */
    MakeDirectoryResponse.create = function create(properties) {
        return new MakeDirectoryResponse(properties);
    };

    /**
     * Encodes the specified MakeDirectoryResponse message. Does not implicitly {@link MakeDirectoryResponse.verify|verify} messages.
     * @function encode
     * @memberof MakeDirectoryResponse
     * @static
     * @param {IMakeDirectoryResponse} message MakeDirectoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeDirectoryResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified MakeDirectoryResponse message, length delimited. Does not implicitly {@link MakeDirectoryResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MakeDirectoryResponse
     * @static
     * @param {IMakeDirectoryResponse} message MakeDirectoryResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MakeDirectoryResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MakeDirectoryResponse message from the specified reader or buffer.
     * @function decode
     * @memberof MakeDirectoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MakeDirectoryResponse} MakeDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeDirectoryResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.MakeDirectoryResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MakeDirectoryResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MakeDirectoryResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MakeDirectoryResponse} MakeDirectoryResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MakeDirectoryResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MakeDirectoryResponse message.
     * @function verify
     * @memberof MakeDirectoryResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MakeDirectoryResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a MakeDirectoryResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MakeDirectoryResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MakeDirectoryResponse} MakeDirectoryResponse
     */
    MakeDirectoryResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.MakeDirectoryResponse)
            return object;
        let message = new $root.MakeDirectoryResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a MakeDirectoryResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MakeDirectoryResponse
     * @static
     * @param {MakeDirectoryResponse} message MakeDirectoryResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MakeDirectoryResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this MakeDirectoryResponse to JSON.
     * @function toJSON
     * @memberof MakeDirectoryResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MakeDirectoryResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for MakeDirectoryResponse
     * @function getTypeUrl
     * @memberof MakeDirectoryResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    MakeDirectoryResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/MakeDirectoryResponse";
    };

    return MakeDirectoryResponse;
})();

export const RemoveFileRequest = $root.RemoveFileRequest = (() => {

    /**
     * Properties of a RemoveFileRequest.
     * @exports IRemoveFileRequest
     * @interface IRemoveFileRequest
     * @property {string|null} [uri] RemoveFileRequest uri
     * @property {string|null} [path] RemoveFileRequest path
     */

    /**
     * Constructs a new RemoveFileRequest.
     * @exports RemoveFileRequest
     * @classdesc Represents a RemoveFileRequest.
     * @implements IRemoveFileRequest
     * @constructor
     * @param {IRemoveFileRequest=} [properties] Properties to set
     */
    function RemoveFileRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveFileRequest uri.
     * @member {string} uri
     * @memberof RemoveFileRequest
     * @instance
     */
    RemoveFileRequest.prototype.uri = "";

    /**
     * RemoveFileRequest path.
     * @member {string} path
     * @memberof RemoveFileRequest
     * @instance
     */
    RemoveFileRequest.prototype.path = "";

    /**
     * Creates a new RemoveFileRequest instance using the specified properties.
     * @function create
     * @memberof RemoveFileRequest
     * @static
     * @param {IRemoveFileRequest=} [properties] Properties to set
     * @returns {RemoveFileRequest} RemoveFileRequest instance
     */
    RemoveFileRequest.create = function create(properties) {
        return new RemoveFileRequest(properties);
    };

    /**
     * Encodes the specified RemoveFileRequest message. Does not implicitly {@link RemoveFileRequest.verify|verify} messages.
     * @function encode
     * @memberof RemoveFileRequest
     * @static
     * @param {IRemoveFileRequest} message RemoveFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveFileRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified RemoveFileRequest message, length delimited. Does not implicitly {@link RemoveFileRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveFileRequest
     * @static
     * @param {IRemoveFileRequest} message RemoveFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveFileRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveFileRequest} RemoveFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveFileRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveFileRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoveFileRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveFileRequest} RemoveFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveFileRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveFileRequest message.
     * @function verify
     * @memberof RemoveFileRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveFileRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a RemoveFileRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveFileRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveFileRequest} RemoveFileRequest
     */
    RemoveFileRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveFileRequest)
            return object;
        let message = new $root.RemoveFileRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a RemoveFileRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveFileRequest
     * @static
     * @param {RemoveFileRequest} message RemoveFileRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveFileRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this RemoveFileRequest to JSON.
     * @function toJSON
     * @memberof RemoveFileRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveFileRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RemoveFileRequest
     * @function getTypeUrl
     * @memberof RemoveFileRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RemoveFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RemoveFileRequest";
    };

    return RemoveFileRequest;
})();

export const RemoveFileResponse = $root.RemoveFileResponse = (() => {

    /**
     * Properties of a RemoveFileResponse.
     * @exports IRemoveFileResponse
     * @interface IRemoveFileResponse
     * @property {string|null} [uri] RemoveFileResponse uri
     * @property {string|null} [path] RemoveFileResponse path
     */

    /**
     * Constructs a new RemoveFileResponse.
     * @exports RemoveFileResponse
     * @classdesc Represents a RemoveFileResponse.
     * @implements IRemoveFileResponse
     * @constructor
     * @param {IRemoveFileResponse=} [properties] Properties to set
     */
    function RemoveFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RemoveFileResponse uri.
     * @member {string} uri
     * @memberof RemoveFileResponse
     * @instance
     */
    RemoveFileResponse.prototype.uri = "";

    /**
     * RemoveFileResponse path.
     * @member {string} path
     * @memberof RemoveFileResponse
     * @instance
     */
    RemoveFileResponse.prototype.path = "";

    /**
     * Creates a new RemoveFileResponse instance using the specified properties.
     * @function create
     * @memberof RemoveFileResponse
     * @static
     * @param {IRemoveFileResponse=} [properties] Properties to set
     * @returns {RemoveFileResponse} RemoveFileResponse instance
     */
    RemoveFileResponse.create = function create(properties) {
        return new RemoveFileResponse(properties);
    };

    /**
     * Encodes the specified RemoveFileResponse message. Does not implicitly {@link RemoveFileResponse.verify|verify} messages.
     * @function encode
     * @memberof RemoveFileResponse
     * @static
     * @param {IRemoveFileResponse} message RemoveFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified RemoveFileResponse message, length delimited. Does not implicitly {@link RemoveFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RemoveFileResponse
     * @static
     * @param {IRemoveFileResponse} message RemoveFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RemoveFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RemoveFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RemoveFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RemoveFileResponse} RemoveFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RemoveFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RemoveFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RemoveFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RemoveFileResponse} RemoveFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RemoveFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RemoveFileResponse message.
     * @function verify
     * @memberof RemoveFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RemoveFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a RemoveFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RemoveFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RemoveFileResponse} RemoveFileResponse
     */
    RemoveFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RemoveFileResponse)
            return object;
        let message = new $root.RemoveFileResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a RemoveFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RemoveFileResponse
     * @static
     * @param {RemoveFileResponse} message RemoveFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RemoveFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this RemoveFileResponse to JSON.
     * @function toJSON
     * @memberof RemoveFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RemoveFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RemoveFileResponse
     * @function getTypeUrl
     * @memberof RemoveFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RemoveFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RemoveFileResponse";
    };

    return RemoveFileResponse;
})();

export const RenameFileRequest = $root.RenameFileRequest = (() => {

    /**
     * Properties of a RenameFileRequest.
     * @exports IRenameFileRequest
     * @interface IRenameFileRequest
     * @property {string|null} [uri] RenameFileRequest uri
     * @property {string|null} [path] RenameFileRequest path
     * @property {string|null} [newFilename] RenameFileRequest newFilename
     */

    /**
     * Constructs a new RenameFileRequest.
     * @exports RenameFileRequest
     * @classdesc Represents a RenameFileRequest.
     * @implements IRenameFileRequest
     * @constructor
     * @param {IRenameFileRequest=} [properties] Properties to set
     */
    function RenameFileRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RenameFileRequest uri.
     * @member {string} uri
     * @memberof RenameFileRequest
     * @instance
     */
    RenameFileRequest.prototype.uri = "";

    /**
     * RenameFileRequest path.
     * @member {string} path
     * @memberof RenameFileRequest
     * @instance
     */
    RenameFileRequest.prototype.path = "";

    /**
     * RenameFileRequest newFilename.
     * @member {string} newFilename
     * @memberof RenameFileRequest
     * @instance
     */
    RenameFileRequest.prototype.newFilename = "";

    /**
     * Creates a new RenameFileRequest instance using the specified properties.
     * @function create
     * @memberof RenameFileRequest
     * @static
     * @param {IRenameFileRequest=} [properties] Properties to set
     * @returns {RenameFileRequest} RenameFileRequest instance
     */
    RenameFileRequest.create = function create(properties) {
        return new RenameFileRequest(properties);
    };

    /**
     * Encodes the specified RenameFileRequest message. Does not implicitly {@link RenameFileRequest.verify|verify} messages.
     * @function encode
     * @memberof RenameFileRequest
     * @static
     * @param {IRenameFileRequest} message RenameFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RenameFileRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.newFilename != null && Object.hasOwnProperty.call(message, "newFilename"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.newFilename);
        return writer;
    };

    /**
     * Encodes the specified RenameFileRequest message, length delimited. Does not implicitly {@link RenameFileRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RenameFileRequest
     * @static
     * @param {IRenameFileRequest} message RenameFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RenameFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RenameFileRequest message from the specified reader or buffer.
     * @function decode
     * @memberof RenameFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RenameFileRequest} RenameFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RenameFileRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RenameFileRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    message.newFilename = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RenameFileRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RenameFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RenameFileRequest} RenameFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RenameFileRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RenameFileRequest message.
     * @function verify
     * @memberof RenameFileRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RenameFileRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.newFilename != null && message.hasOwnProperty("newFilename"))
            if (!$util.isString(message.newFilename))
                return "newFilename: string expected";
        return null;
    };

    /**
     * Creates a RenameFileRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RenameFileRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RenameFileRequest} RenameFileRequest
     */
    RenameFileRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.RenameFileRequest)
            return object;
        let message = new $root.RenameFileRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.newFilename != null)
            message.newFilename = String(object.newFilename);
        return message;
    };

    /**
     * Creates a plain object from a RenameFileRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RenameFileRequest
     * @static
     * @param {RenameFileRequest} message RenameFileRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RenameFileRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
            object.newFilename = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.newFilename != null && message.hasOwnProperty("newFilename"))
            object.newFilename = message.newFilename;
        return object;
    };

    /**
     * Converts this RenameFileRequest to JSON.
     * @function toJSON
     * @memberof RenameFileRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RenameFileRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RenameFileRequest
     * @function getTypeUrl
     * @memberof RenameFileRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RenameFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RenameFileRequest";
    };

    return RenameFileRequest;
})();

export const RenameFileResponse = $root.RenameFileResponse = (() => {

    /**
     * Properties of a RenameFileResponse.
     * @exports IRenameFileResponse
     * @interface IRenameFileResponse
     * @property {string|null} [uri] RenameFileResponse uri
     * @property {string|null} [path] RenameFileResponse path
     * @property {string|null} [newFilename] RenameFileResponse newFilename
     */

    /**
     * Constructs a new RenameFileResponse.
     * @exports RenameFileResponse
     * @classdesc Represents a RenameFileResponse.
     * @implements IRenameFileResponse
     * @constructor
     * @param {IRenameFileResponse=} [properties] Properties to set
     */
    function RenameFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RenameFileResponse uri.
     * @member {string} uri
     * @memberof RenameFileResponse
     * @instance
     */
    RenameFileResponse.prototype.uri = "";

    /**
     * RenameFileResponse path.
     * @member {string} path
     * @memberof RenameFileResponse
     * @instance
     */
    RenameFileResponse.prototype.path = "";

    /**
     * RenameFileResponse newFilename.
     * @member {string} newFilename
     * @memberof RenameFileResponse
     * @instance
     */
    RenameFileResponse.prototype.newFilename = "";

    /**
     * Creates a new RenameFileResponse instance using the specified properties.
     * @function create
     * @memberof RenameFileResponse
     * @static
     * @param {IRenameFileResponse=} [properties] Properties to set
     * @returns {RenameFileResponse} RenameFileResponse instance
     */
    RenameFileResponse.create = function create(properties) {
        return new RenameFileResponse(properties);
    };

    /**
     * Encodes the specified RenameFileResponse message. Does not implicitly {@link RenameFileResponse.verify|verify} messages.
     * @function encode
     * @memberof RenameFileResponse
     * @static
     * @param {IRenameFileResponse} message RenameFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RenameFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.newFilename != null && Object.hasOwnProperty.call(message, "newFilename"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.newFilename);
        return writer;
    };

    /**
     * Encodes the specified RenameFileResponse message, length delimited. Does not implicitly {@link RenameFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RenameFileResponse
     * @static
     * @param {IRenameFileResponse} message RenameFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RenameFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RenameFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof RenameFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RenameFileResponse} RenameFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RenameFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.RenameFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    message.newFilename = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RenameFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RenameFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RenameFileResponse} RenameFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RenameFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RenameFileResponse message.
     * @function verify
     * @memberof RenameFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RenameFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.newFilename != null && message.hasOwnProperty("newFilename"))
            if (!$util.isString(message.newFilename))
                return "newFilename: string expected";
        return null;
    };

    /**
     * Creates a RenameFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RenameFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RenameFileResponse} RenameFileResponse
     */
    RenameFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.RenameFileResponse)
            return object;
        let message = new $root.RenameFileResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.newFilename != null)
            message.newFilename = String(object.newFilename);
        return message;
    };

    /**
     * Creates a plain object from a RenameFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RenameFileResponse
     * @static
     * @param {RenameFileResponse} message RenameFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RenameFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
            object.newFilename = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.newFilename != null && message.hasOwnProperty("newFilename"))
            object.newFilename = message.newFilename;
        return object;
    };

    /**
     * Converts this RenameFileResponse to JSON.
     * @function toJSON
     * @memberof RenameFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RenameFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RenameFileResponse
     * @function getTypeUrl
     * @memberof RenameFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RenameFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RenameFileResponse";
    };

    return RenameFileResponse;
})();

export const PutFileRequest = $root.PutFileRequest = (() => {

    /**
     * Properties of a PutFileRequest.
     * @exports IPutFileRequest
     * @interface IPutFileRequest
     * @property {string|null} [uri] PutFileRequest uri
     * @property {string|null} [path] PutFileRequest path
     * @property {Uint8Array|null} [data] PutFileRequest data
     */

    /**
     * Constructs a new PutFileRequest.
     * @exports PutFileRequest
     * @classdesc Represents a PutFileRequest.
     * @implements IPutFileRequest
     * @constructor
     * @param {IPutFileRequest=} [properties] Properties to set
     */
    function PutFileRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PutFileRequest uri.
     * @member {string} uri
     * @memberof PutFileRequest
     * @instance
     */
    PutFileRequest.prototype.uri = "";

    /**
     * PutFileRequest path.
     * @member {string} path
     * @memberof PutFileRequest
     * @instance
     */
    PutFileRequest.prototype.path = "";

    /**
     * PutFileRequest data.
     * @member {Uint8Array} data
     * @memberof PutFileRequest
     * @instance
     */
    PutFileRequest.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new PutFileRequest instance using the specified properties.
     * @function create
     * @memberof PutFileRequest
     * @static
     * @param {IPutFileRequest=} [properties] Properties to set
     * @returns {PutFileRequest} PutFileRequest instance
     */
    PutFileRequest.create = function create(properties) {
        return new PutFileRequest(properties);
    };

    /**
     * Encodes the specified PutFileRequest message. Does not implicitly {@link PutFileRequest.verify|verify} messages.
     * @function encode
     * @memberof PutFileRequest
     * @static
     * @param {IPutFileRequest} message PutFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutFileRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified PutFileRequest message, length delimited. Does not implicitly {@link PutFileRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PutFileRequest
     * @static
     * @param {IPutFileRequest} message PutFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PutFileRequest message from the specified reader or buffer.
     * @function decode
     * @memberof PutFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PutFileRequest} PutFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutFileRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PutFileRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PutFileRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PutFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PutFileRequest} PutFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutFileRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PutFileRequest message.
     * @function verify
     * @memberof PutFileRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PutFileRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a PutFileRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PutFileRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PutFileRequest} PutFileRequest
     */
    PutFileRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.PutFileRequest)
            return object;
        let message = new $root.PutFileRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a PutFileRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PutFileRequest
     * @static
     * @param {PutFileRequest} message PutFileRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PutFileRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this PutFileRequest to JSON.
     * @function toJSON
     * @memberof PutFileRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PutFileRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PutFileRequest
     * @function getTypeUrl
     * @memberof PutFileRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PutFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PutFileRequest";
    };

    return PutFileRequest;
})();

export const PutFileResponse = $root.PutFileResponse = (() => {

    /**
     * Properties of a PutFileResponse.
     * @exports IPutFileResponse
     * @interface IPutFileResponse
     * @property {string|null} [uri] PutFileResponse uri
     * @property {string|null} [path] PutFileResponse path
     * @property {number|null} [size] PutFileResponse size
     */

    /**
     * Constructs a new PutFileResponse.
     * @exports PutFileResponse
     * @classdesc Represents a PutFileResponse.
     * @implements IPutFileResponse
     * @constructor
     * @param {IPutFileResponse=} [properties] Properties to set
     */
    function PutFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * PutFileResponse uri.
     * @member {string} uri
     * @memberof PutFileResponse
     * @instance
     */
    PutFileResponse.prototype.uri = "";

    /**
     * PutFileResponse path.
     * @member {string} path
     * @memberof PutFileResponse
     * @instance
     */
    PutFileResponse.prototype.path = "";

    /**
     * PutFileResponse size.
     * @member {number} size
     * @memberof PutFileResponse
     * @instance
     */
    PutFileResponse.prototype.size = 0;

    /**
     * Creates a new PutFileResponse instance using the specified properties.
     * @function create
     * @memberof PutFileResponse
     * @static
     * @param {IPutFileResponse=} [properties] Properties to set
     * @returns {PutFileResponse} PutFileResponse instance
     */
    PutFileResponse.create = function create(properties) {
        return new PutFileResponse(properties);
    };

    /**
     * Encodes the specified PutFileResponse message. Does not implicitly {@link PutFileResponse.verify|verify} messages.
     * @function encode
     * @memberof PutFileResponse
     * @static
     * @param {IPutFileResponse} message PutFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
        return writer;
    };

    /**
     * Encodes the specified PutFileResponse message, length delimited. Does not implicitly {@link PutFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof PutFileResponse
     * @static
     * @param {IPutFileResponse} message PutFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    PutFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a PutFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof PutFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {PutFileResponse} PutFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.PutFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    message.size = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a PutFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof PutFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {PutFileResponse} PutFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    PutFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a PutFileResponse message.
     * @function verify
     * @memberof PutFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    PutFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size))
                return "size: integer expected";
        return null;
    };

    /**
     * Creates a PutFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof PutFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {PutFileResponse} PutFileResponse
     */
    PutFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.PutFileResponse)
            return object;
        let message = new $root.PutFileResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.size != null)
            message.size = object.size >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a PutFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof PutFileResponse
     * @static
     * @param {PutFileResponse} message PutFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    PutFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
            object.size = 0;
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.size != null && message.hasOwnProperty("size"))
            object.size = message.size;
        return object;
    };

    /**
     * Converts this PutFileResponse to JSON.
     * @function toJSON
     * @memberof PutFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    PutFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for PutFileResponse
     * @function getTypeUrl
     * @memberof PutFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    PutFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/PutFileResponse";
    };

    return PutFileResponse;
})();

export const GetFileRequest = $root.GetFileRequest = (() => {

    /**
     * Properties of a GetFileRequest.
     * @exports IGetFileRequest
     * @interface IGetFileRequest
     * @property {string|null} [uri] GetFileRequest uri
     * @property {string|null} [path] GetFileRequest path
     */

    /**
     * Constructs a new GetFileRequest.
     * @exports GetFileRequest
     * @classdesc Represents a GetFileRequest.
     * @implements IGetFileRequest
     * @constructor
     * @param {IGetFileRequest=} [properties] Properties to set
     */
    function GetFileRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetFileRequest uri.
     * @member {string} uri
     * @memberof GetFileRequest
     * @instance
     */
    GetFileRequest.prototype.uri = "";

    /**
     * GetFileRequest path.
     * @member {string} path
     * @memberof GetFileRequest
     * @instance
     */
    GetFileRequest.prototype.path = "";

    /**
     * Creates a new GetFileRequest instance using the specified properties.
     * @function create
     * @memberof GetFileRequest
     * @static
     * @param {IGetFileRequest=} [properties] Properties to set
     * @returns {GetFileRequest} GetFileRequest instance
     */
    GetFileRequest.create = function create(properties) {
        return new GetFileRequest(properties);
    };

    /**
     * Encodes the specified GetFileRequest message. Does not implicitly {@link GetFileRequest.verify|verify} messages.
     * @function encode
     * @memberof GetFileRequest
     * @static
     * @param {IGetFileRequest} message GetFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFileRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified GetFileRequest message, length delimited. Does not implicitly {@link GetFileRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetFileRequest
     * @static
     * @param {IGetFileRequest} message GetFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetFileRequest message from the specified reader or buffer.
     * @function decode
     * @memberof GetFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetFileRequest} GetFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFileRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetFileRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetFileRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetFileRequest} GetFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFileRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetFileRequest message.
     * @function verify
     * @memberof GetFileRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetFileRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a GetFileRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetFileRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetFileRequest} GetFileRequest
     */
    GetFileRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.GetFileRequest)
            return object;
        let message = new $root.GetFileRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a GetFileRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetFileRequest
     * @static
     * @param {GetFileRequest} message GetFileRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetFileRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this GetFileRequest to JSON.
     * @function toJSON
     * @memberof GetFileRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetFileRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetFileRequest
     * @function getTypeUrl
     * @memberof GetFileRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetFileRequest";
    };

    return GetFileRequest;
})();

export const GetFileResponse = $root.GetFileResponse = (() => {

    /**
     * Properties of a GetFileResponse.
     * @exports IGetFileResponse
     * @interface IGetFileResponse
     * @property {string|null} [uri] GetFileResponse uri
     * @property {string|null} [path] GetFileResponse path
     * @property {number|null} [size] GetFileResponse size
     * @property {Uint8Array|null} [data] GetFileResponse data
     */

    /**
     * Constructs a new GetFileResponse.
     * @exports GetFileResponse
     * @classdesc Represents a GetFileResponse.
     * @implements IGetFileResponse
     * @constructor
     * @param {IGetFileResponse=} [properties] Properties to set
     */
    function GetFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GetFileResponse uri.
     * @member {string} uri
     * @memberof GetFileResponse
     * @instance
     */
    GetFileResponse.prototype.uri = "";

    /**
     * GetFileResponse path.
     * @member {string} path
     * @memberof GetFileResponse
     * @instance
     */
    GetFileResponse.prototype.path = "";

    /**
     * GetFileResponse size.
     * @member {number} size
     * @memberof GetFileResponse
     * @instance
     */
    GetFileResponse.prototype.size = 0;

    /**
     * GetFileResponse data.
     * @member {Uint8Array} data
     * @memberof GetFileResponse
     * @instance
     */
    GetFileResponse.prototype.data = $util.newBuffer([]);

    /**
     * Creates a new GetFileResponse instance using the specified properties.
     * @function create
     * @memberof GetFileResponse
     * @static
     * @param {IGetFileResponse=} [properties] Properties to set
     * @returns {GetFileResponse} GetFileResponse instance
     */
    GetFileResponse.create = function create(properties) {
        return new GetFileResponse(properties);
    };

    /**
     * Encodes the specified GetFileResponse message. Does not implicitly {@link GetFileResponse.verify|verify} messages.
     * @function encode
     * @memberof GetFileResponse
     * @static
     * @param {IGetFileResponse} message GetFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        if (message.size != null && Object.hasOwnProperty.call(message, "size"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.size);
        if (message.data != null && Object.hasOwnProperty.call(message, "data"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.data);
        return writer;
    };

    /**
     * Encodes the specified GetFileResponse message, length delimited. Does not implicitly {@link GetFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GetFileResponse
     * @static
     * @param {IGetFileResponse} message GetFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GetFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GetFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof GetFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GetFileResponse} GetFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.GetFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            case 3: {
                    message.size = reader.uint32();
                    break;
                }
            case 4: {
                    message.data = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GetFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GetFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GetFileResponse} GetFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GetFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GetFileResponse message.
     * @function verify
     * @memberof GetFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GetFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        if (message.size != null && message.hasOwnProperty("size"))
            if (!$util.isInteger(message.size))
                return "size: integer expected";
        if (message.data != null && message.hasOwnProperty("data"))
            if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                return "data: buffer expected";
        return null;
    };

    /**
     * Creates a GetFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GetFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GetFileResponse} GetFileResponse
     */
    GetFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.GetFileResponse)
            return object;
        let message = new $root.GetFileResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        if (object.size != null)
            message.size = object.size >>> 0;
        if (object.data != null)
            if (typeof object.data === "string")
                $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
            else if (object.data.length >= 0)
                message.data = object.data;
        return message;
    };

    /**
     * Creates a plain object from a GetFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GetFileResponse
     * @static
     * @param {GetFileResponse} message GetFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GetFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
            object.size = 0;
            if (options.bytes === String)
                object.data = "";
            else {
                object.data = [];
                if (options.bytes !== Array)
                    object.data = $util.newBuffer(object.data);
            }
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        if (message.size != null && message.hasOwnProperty("size"))
            object.size = message.size;
        if (message.data != null && message.hasOwnProperty("data"))
            object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
        return object;
    };

    /**
     * Converts this GetFileResponse to JSON.
     * @function toJSON
     * @memberof GetFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GetFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GetFileResponse
     * @function getTypeUrl
     * @memberof GetFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GetFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GetFileResponse";
    };

    return GetFileResponse;
})();

export const BootFileRequest = $root.BootFileRequest = (() => {

    /**
     * Properties of a BootFileRequest.
     * @exports IBootFileRequest
     * @interface IBootFileRequest
     * @property {string|null} [uri] BootFileRequest uri
     * @property {string|null} [path] BootFileRequest path
     */

    /**
     * Constructs a new BootFileRequest.
     * @exports BootFileRequest
     * @classdesc Represents a BootFileRequest.
     * @implements IBootFileRequest
     * @constructor
     * @param {IBootFileRequest=} [properties] Properties to set
     */
    function BootFileRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BootFileRequest uri.
     * @member {string} uri
     * @memberof BootFileRequest
     * @instance
     */
    BootFileRequest.prototype.uri = "";

    /**
     * BootFileRequest path.
     * @member {string} path
     * @memberof BootFileRequest
     * @instance
     */
    BootFileRequest.prototype.path = "";

    /**
     * Creates a new BootFileRequest instance using the specified properties.
     * @function create
     * @memberof BootFileRequest
     * @static
     * @param {IBootFileRequest=} [properties] Properties to set
     * @returns {BootFileRequest} BootFileRequest instance
     */
    BootFileRequest.create = function create(properties) {
        return new BootFileRequest(properties);
    };

    /**
     * Encodes the specified BootFileRequest message. Does not implicitly {@link BootFileRequest.verify|verify} messages.
     * @function encode
     * @memberof BootFileRequest
     * @static
     * @param {IBootFileRequest} message BootFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BootFileRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified BootFileRequest message, length delimited. Does not implicitly {@link BootFileRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BootFileRequest
     * @static
     * @param {IBootFileRequest} message BootFileRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BootFileRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BootFileRequest message from the specified reader or buffer.
     * @function decode
     * @memberof BootFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BootFileRequest} BootFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BootFileRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BootFileRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BootFileRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BootFileRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BootFileRequest} BootFileRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BootFileRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BootFileRequest message.
     * @function verify
     * @memberof BootFileRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BootFileRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a BootFileRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BootFileRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BootFileRequest} BootFileRequest
     */
    BootFileRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.BootFileRequest)
            return object;
        let message = new $root.BootFileRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a BootFileRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BootFileRequest
     * @static
     * @param {BootFileRequest} message BootFileRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BootFileRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this BootFileRequest to JSON.
     * @function toJSON
     * @memberof BootFileRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BootFileRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BootFileRequest
     * @function getTypeUrl
     * @memberof BootFileRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BootFileRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BootFileRequest";
    };

    return BootFileRequest;
})();

export const BootFileResponse = $root.BootFileResponse = (() => {

    /**
     * Properties of a BootFileResponse.
     * @exports IBootFileResponse
     * @interface IBootFileResponse
     * @property {string|null} [uri] BootFileResponse uri
     * @property {string|null} [path] BootFileResponse path
     */

    /**
     * Constructs a new BootFileResponse.
     * @exports BootFileResponse
     * @classdesc Represents a BootFileResponse.
     * @implements IBootFileResponse
     * @constructor
     * @param {IBootFileResponse=} [properties] Properties to set
     */
    function BootFileResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * BootFileResponse uri.
     * @member {string} uri
     * @memberof BootFileResponse
     * @instance
     */
    BootFileResponse.prototype.uri = "";

    /**
     * BootFileResponse path.
     * @member {string} path
     * @memberof BootFileResponse
     * @instance
     */
    BootFileResponse.prototype.path = "";

    /**
     * Creates a new BootFileResponse instance using the specified properties.
     * @function create
     * @memberof BootFileResponse
     * @static
     * @param {IBootFileResponse=} [properties] Properties to set
     * @returns {BootFileResponse} BootFileResponse instance
     */
    BootFileResponse.create = function create(properties) {
        return new BootFileResponse(properties);
    };

    /**
     * Encodes the specified BootFileResponse message. Does not implicitly {@link BootFileResponse.verify|verify} messages.
     * @function encode
     * @memberof BootFileResponse
     * @static
     * @param {IBootFileResponse} message BootFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BootFileResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.path != null && Object.hasOwnProperty.call(message, "path"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.path);
        return writer;
    };

    /**
     * Encodes the specified BootFileResponse message, length delimited. Does not implicitly {@link BootFileResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof BootFileResponse
     * @static
     * @param {IBootFileResponse} message BootFileResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    BootFileResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a BootFileResponse message from the specified reader or buffer.
     * @function decode
     * @memberof BootFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {BootFileResponse} BootFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BootFileResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.BootFileResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.path = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a BootFileResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof BootFileResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {BootFileResponse} BootFileResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    BootFileResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a BootFileResponse message.
     * @function verify
     * @memberof BootFileResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    BootFileResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.path != null && message.hasOwnProperty("path"))
            if (!$util.isString(message.path))
                return "path: string expected";
        return null;
    };

    /**
     * Creates a BootFileResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof BootFileResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {BootFileResponse} BootFileResponse
     */
    BootFileResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.BootFileResponse)
            return object;
        let message = new $root.BootFileResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.path != null)
            message.path = String(object.path);
        return message;
    };

    /**
     * Creates a plain object from a BootFileResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof BootFileResponse
     * @static
     * @param {BootFileResponse} message BootFileResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    BootFileResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.path = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.path != null && message.hasOwnProperty("path"))
            object.path = message.path;
        return object;
    };

    /**
     * Converts this BootFileResponse to JSON.
     * @function toJSON
     * @memberof BootFileResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    BootFileResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for BootFileResponse
     * @function getTypeUrl
     * @memberof BootFileResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    BootFileResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/BootFileResponse";
    };

    return BootFileResponse;
})();

export const FieldsRequest = $root.FieldsRequest = (() => {

    /**
     * Properties of a FieldsRequest.
     * @exports IFieldsRequest
     * @interface IFieldsRequest
     * @property {string|null} [uri] FieldsRequest uri
     * @property {Array.<Field>|null} [fields] FieldsRequest fields
     */

    /**
     * Constructs a new FieldsRequest.
     * @exports FieldsRequest
     * @classdesc Represents a FieldsRequest.
     * @implements IFieldsRequest
     * @constructor
     * @param {IFieldsRequest=} [properties] Properties to set
     */
    function FieldsRequest(properties) {
        this.fields = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FieldsRequest uri.
     * @member {string} uri
     * @memberof FieldsRequest
     * @instance
     */
    FieldsRequest.prototype.uri = "";

    /**
     * FieldsRequest fields.
     * @member {Array.<Field>} fields
     * @memberof FieldsRequest
     * @instance
     */
    FieldsRequest.prototype.fields = $util.emptyArray;

    /**
     * Creates a new FieldsRequest instance using the specified properties.
     * @function create
     * @memberof FieldsRequest
     * @static
     * @param {IFieldsRequest=} [properties] Properties to set
     * @returns {FieldsRequest} FieldsRequest instance
     */
    FieldsRequest.create = function create(properties) {
        return new FieldsRequest(properties);
    };

    /**
     * Encodes the specified FieldsRequest message. Does not implicitly {@link FieldsRequest.verify|verify} messages.
     * @function encode
     * @memberof FieldsRequest
     * @static
     * @param {IFieldsRequest} message FieldsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldsRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.fields != null && message.fields.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.fields.length; ++i)
                writer.int32(message.fields[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified FieldsRequest message, length delimited. Does not implicitly {@link FieldsRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FieldsRequest
     * @static
     * @param {IFieldsRequest} message FieldsRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldsRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FieldsRequest message from the specified reader or buffer.
     * @function decode
     * @memberof FieldsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FieldsRequest} FieldsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldsRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FieldsRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.fields && message.fields.length))
                        message.fields = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.fields.push(reader.int32());
                    } else
                        message.fields.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FieldsRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FieldsRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FieldsRequest} FieldsRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldsRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FieldsRequest message.
     * @function verify
     * @memberof FieldsRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FieldsRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.fields != null && message.hasOwnProperty("fields")) {
            if (!Array.isArray(message.fields))
                return "fields: array expected";
            for (let i = 0; i < message.fields.length; ++i)
                switch (message.fields[i]) {
                default:
                    return "fields: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 20:
                case 21:
                case 22:
                case 40:
                case 41:
                case 42:
                    break;
                }
        }
        return null;
    };

    /**
     * Creates a FieldsRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FieldsRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FieldsRequest} FieldsRequest
     */
    FieldsRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.FieldsRequest)
            return object;
        let message = new $root.FieldsRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.fields) {
            if (!Array.isArray(object.fields))
                throw TypeError(".FieldsRequest.fields: array expected");
            message.fields = [];
            for (let i = 0; i < object.fields.length; ++i)
                switch (object.fields[i]) {
                default:
                    if (typeof object.fields[i] === "number") {
                        message.fields[i] = object.fields[i];
                        break;
                    }
                case "DeviceName":
                case 0:
                    message.fields[i] = 0;
                    break;
                case "DeviceVersion":
                case 1:
                    message.fields[i] = 1;
                    break;
                case "DeviceStatus":
                case 2:
                    message.fields[i] = 2;
                    break;
                case "CoreName":
                case 20:
                    message.fields[i] = 20;
                    break;
                case "CoreVersion":
                case 21:
                    message.fields[i] = 21;
                    break;
                case "CorePlatform":
                case 22:
                    message.fields[i] = 22;
                    break;
                case "RomFileName":
                case 40:
                    message.fields[i] = 40;
                    break;
                case "RomHashType":
                case 41:
                    message.fields[i] = 41;
                    break;
                case "RomHashValue":
                case 42:
                    message.fields[i] = 42;
                    break;
                }
        }
        return message;
    };

    /**
     * Creates a plain object from a FieldsRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FieldsRequest
     * @static
     * @param {FieldsRequest} message FieldsRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FieldsRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.fields = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.fields && message.fields.length) {
            object.fields = [];
            for (let j = 0; j < message.fields.length; ++j)
                object.fields[j] = options.enums === String ? $root.Field[message.fields[j]] === undefined ? message.fields[j] : $root.Field[message.fields[j]] : message.fields[j];
        }
        return object;
    };

    /**
     * Converts this FieldsRequest to JSON.
     * @function toJSON
     * @memberof FieldsRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FieldsRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FieldsRequest
     * @function getTypeUrl
     * @memberof FieldsRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FieldsRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FieldsRequest";
    };

    return FieldsRequest;
})();

export const FieldsResponse = $root.FieldsResponse = (() => {

    /**
     * Properties of a FieldsResponse.
     * @exports IFieldsResponse
     * @interface IFieldsResponse
     * @property {string|null} [uri] FieldsResponse uri
     * @property {Array.<Field>|null} [fields] FieldsResponse fields
     * @property {Array.<string>|null} [values] FieldsResponse values
     */

    /**
     * Constructs a new FieldsResponse.
     * @exports FieldsResponse
     * @classdesc Represents a FieldsResponse.
     * @implements IFieldsResponse
     * @constructor
     * @param {IFieldsResponse=} [properties] Properties to set
     */
    function FieldsResponse(properties) {
        this.fields = [];
        this.values = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * FieldsResponse uri.
     * @member {string} uri
     * @memberof FieldsResponse
     * @instance
     */
    FieldsResponse.prototype.uri = "";

    /**
     * FieldsResponse fields.
     * @member {Array.<Field>} fields
     * @memberof FieldsResponse
     * @instance
     */
    FieldsResponse.prototype.fields = $util.emptyArray;

    /**
     * FieldsResponse values.
     * @member {Array.<string>} values
     * @memberof FieldsResponse
     * @instance
     */
    FieldsResponse.prototype.values = $util.emptyArray;

    /**
     * Creates a new FieldsResponse instance using the specified properties.
     * @function create
     * @memberof FieldsResponse
     * @static
     * @param {IFieldsResponse=} [properties] Properties to set
     * @returns {FieldsResponse} FieldsResponse instance
     */
    FieldsResponse.create = function create(properties) {
        return new FieldsResponse(properties);
    };

    /**
     * Encodes the specified FieldsResponse message. Does not implicitly {@link FieldsResponse.verify|verify} messages.
     * @function encode
     * @memberof FieldsResponse
     * @static
     * @param {IFieldsResponse} message FieldsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldsResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.fields != null && message.fields.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (let i = 0; i < message.fields.length; ++i)
                writer.int32(message.fields[i]);
            writer.ldelim();
        }
        if (message.values != null && message.values.length)
            for (let i = 0; i < message.values.length; ++i)
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.values[i]);
        return writer;
    };

    /**
     * Encodes the specified FieldsResponse message, length delimited. Does not implicitly {@link FieldsResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof FieldsResponse
     * @static
     * @param {IFieldsResponse} message FieldsResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    FieldsResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a FieldsResponse message from the specified reader or buffer.
     * @function decode
     * @memberof FieldsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {FieldsResponse} FieldsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldsResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.FieldsResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.fields && message.fields.length))
                        message.fields = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.fields.push(reader.int32());
                    } else
                        message.fields.push(reader.int32());
                    break;
                }
            case 3: {
                    if (!(message.values && message.values.length))
                        message.values = [];
                    message.values.push(reader.string());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a FieldsResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof FieldsResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {FieldsResponse} FieldsResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    FieldsResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a FieldsResponse message.
     * @function verify
     * @memberof FieldsResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    FieldsResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.fields != null && message.hasOwnProperty("fields")) {
            if (!Array.isArray(message.fields))
                return "fields: array expected";
            for (let i = 0; i < message.fields.length; ++i)
                switch (message.fields[i]) {
                default:
                    return "fields: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 20:
                case 21:
                case 22:
                case 40:
                case 41:
                case 42:
                    break;
                }
        }
        if (message.values != null && message.hasOwnProperty("values")) {
            if (!Array.isArray(message.values))
                return "values: array expected";
            for (let i = 0; i < message.values.length; ++i)
                if (!$util.isString(message.values[i]))
                    return "values: string[] expected";
        }
        return null;
    };

    /**
     * Creates a FieldsResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof FieldsResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {FieldsResponse} FieldsResponse
     */
    FieldsResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.FieldsResponse)
            return object;
        let message = new $root.FieldsResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.fields) {
            if (!Array.isArray(object.fields))
                throw TypeError(".FieldsResponse.fields: array expected");
            message.fields = [];
            for (let i = 0; i < object.fields.length; ++i)
                switch (object.fields[i]) {
                default:
                    if (typeof object.fields[i] === "number") {
                        message.fields[i] = object.fields[i];
                        break;
                    }
                case "DeviceName":
                case 0:
                    message.fields[i] = 0;
                    break;
                case "DeviceVersion":
                case 1:
                    message.fields[i] = 1;
                    break;
                case "DeviceStatus":
                case 2:
                    message.fields[i] = 2;
                    break;
                case "CoreName":
                case 20:
                    message.fields[i] = 20;
                    break;
                case "CoreVersion":
                case 21:
                    message.fields[i] = 21;
                    break;
                case "CorePlatform":
                case 22:
                    message.fields[i] = 22;
                    break;
                case "RomFileName":
                case 40:
                    message.fields[i] = 40;
                    break;
                case "RomHashType":
                case 41:
                    message.fields[i] = 41;
                    break;
                case "RomHashValue":
                case 42:
                    message.fields[i] = 42;
                    break;
                }
        }
        if (object.values) {
            if (!Array.isArray(object.values))
                throw TypeError(".FieldsResponse.values: array expected");
            message.values = [];
            for (let i = 0; i < object.values.length; ++i)
                message.values[i] = String(object.values[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a FieldsResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof FieldsResponse
     * @static
     * @param {FieldsResponse} message FieldsResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    FieldsResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults) {
            object.fields = [];
            object.values = [];
        }
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.fields && message.fields.length) {
            object.fields = [];
            for (let j = 0; j < message.fields.length; ++j)
                object.fields[j] = options.enums === String ? $root.Field[message.fields[j]] === undefined ? message.fields[j] : $root.Field[message.fields[j]] : message.fields[j];
        }
        if (message.values && message.values.length) {
            object.values = [];
            for (let j = 0; j < message.values.length; ++j)
                object.values[j] = message.values[j];
        }
        return object;
    };

    /**
     * Converts this FieldsResponse to JSON.
     * @function toJSON
     * @memberof FieldsResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    FieldsResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for FieldsResponse
     * @function getTypeUrl
     * @memberof FieldsResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    FieldsResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/FieldsResponse";
    };

    return FieldsResponse;
})();

export const NWACommandRequest = $root.NWACommandRequest = (() => {

    /**
     * Properties of a NWACommandRequest.
     * @exports INWACommandRequest
     * @interface INWACommandRequest
     * @property {string|null} [uri] NWACommandRequest uri
     * @property {string|null} [command] NWACommandRequest command
     * @property {string|null} [args] NWACommandRequest args
     * @property {Uint8Array|null} [binaryArg] NWACommandRequest binaryArg
     */

    /**
     * Constructs a new NWACommandRequest.
     * @exports NWACommandRequest
     * @classdesc Represents a NWACommandRequest.
     * @implements INWACommandRequest
     * @constructor
     * @param {INWACommandRequest=} [properties] Properties to set
     */
    function NWACommandRequest(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NWACommandRequest uri.
     * @member {string} uri
     * @memberof NWACommandRequest
     * @instance
     */
    NWACommandRequest.prototype.uri = "";

    /**
     * NWACommandRequest command.
     * @member {string} command
     * @memberof NWACommandRequest
     * @instance
     */
    NWACommandRequest.prototype.command = "";

    /**
     * NWACommandRequest args.
     * @member {string} args
     * @memberof NWACommandRequest
     * @instance
     */
    NWACommandRequest.prototype.args = "";

    /**
     * NWACommandRequest binaryArg.
     * @member {Uint8Array|null|undefined} binaryArg
     * @memberof NWACommandRequest
     * @instance
     */
    NWACommandRequest.prototype.binaryArg = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(NWACommandRequest.prototype, "_binaryArg", {
        get: $util.oneOfGetter($oneOfFields = ["binaryArg"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NWACommandRequest instance using the specified properties.
     * @function create
     * @memberof NWACommandRequest
     * @static
     * @param {INWACommandRequest=} [properties] Properties to set
     * @returns {NWACommandRequest} NWACommandRequest instance
     */
    NWACommandRequest.create = function create(properties) {
        return new NWACommandRequest(properties);
    };

    /**
     * Encodes the specified NWACommandRequest message. Does not implicitly {@link NWACommandRequest.verify|verify} messages.
     * @function encode
     * @memberof NWACommandRequest
     * @static
     * @param {INWACommandRequest} message NWACommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NWACommandRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.command != null && Object.hasOwnProperty.call(message, "command"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.command);
        if (message.args != null && Object.hasOwnProperty.call(message, "args"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.args);
        if (message.binaryArg != null && Object.hasOwnProperty.call(message, "binaryArg"))
            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.binaryArg);
        return writer;
    };

    /**
     * Encodes the specified NWACommandRequest message, length delimited. Does not implicitly {@link NWACommandRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NWACommandRequest
     * @static
     * @param {INWACommandRequest} message NWACommandRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NWACommandRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NWACommandRequest message from the specified reader or buffer.
     * @function decode
     * @memberof NWACommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NWACommandRequest} NWACommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NWACommandRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NWACommandRequest();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    message.command = reader.string();
                    break;
                }
            case 3: {
                    message.args = reader.string();
                    break;
                }
            case 4: {
                    message.binaryArg = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NWACommandRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NWACommandRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NWACommandRequest} NWACommandRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NWACommandRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NWACommandRequest message.
     * @function verify
     * @memberof NWACommandRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NWACommandRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.command != null && message.hasOwnProperty("command"))
            if (!$util.isString(message.command))
                return "command: string expected";
        if (message.args != null && message.hasOwnProperty("args"))
            if (!$util.isString(message.args))
                return "args: string expected";
        if (message.binaryArg != null && message.hasOwnProperty("binaryArg")) {
            properties._binaryArg = 1;
            if (!(message.binaryArg && typeof message.binaryArg.length === "number" || $util.isString(message.binaryArg)))
                return "binaryArg: buffer expected";
        }
        return null;
    };

    /**
     * Creates a NWACommandRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NWACommandRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NWACommandRequest} NWACommandRequest
     */
    NWACommandRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.NWACommandRequest)
            return object;
        let message = new $root.NWACommandRequest();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.command != null)
            message.command = String(object.command);
        if (object.args != null)
            message.args = String(object.args);
        if (object.binaryArg != null)
            if (typeof object.binaryArg === "string")
                $util.base64.decode(object.binaryArg, message.binaryArg = $util.newBuffer($util.base64.length(object.binaryArg)), 0);
            else if (object.binaryArg.length >= 0)
                message.binaryArg = object.binaryArg;
        return message;
    };

    /**
     * Creates a plain object from a NWACommandRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NWACommandRequest
     * @static
     * @param {NWACommandRequest} message NWACommandRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NWACommandRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.uri = "";
            object.command = "";
            object.args = "";
        }
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.command != null && message.hasOwnProperty("command"))
            object.command = message.command;
        if (message.args != null && message.hasOwnProperty("args"))
            object.args = message.args;
        if (message.binaryArg != null && message.hasOwnProperty("binaryArg")) {
            object.binaryArg = options.bytes === String ? $util.base64.encode(message.binaryArg, 0, message.binaryArg.length) : options.bytes === Array ? Array.prototype.slice.call(message.binaryArg) : message.binaryArg;
            if (options.oneofs)
                object._binaryArg = "binaryArg";
        }
        return object;
    };

    /**
     * Converts this NWACommandRequest to JSON.
     * @function toJSON
     * @memberof NWACommandRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NWACommandRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NWACommandRequest
     * @function getTypeUrl
     * @memberof NWACommandRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NWACommandRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NWACommandRequest";
    };

    return NWACommandRequest;
})();

export const NWACommandResponse = $root.NWACommandResponse = (() => {

    /**
     * Properties of a NWACommandResponse.
     * @exports INWACommandResponse
     * @interface INWACommandResponse
     * @property {string|null} [uri] NWACommandResponse uri
     * @property {Array.<NWACommandResponse.INWAASCIIItem>|null} [asciiReply] NWACommandResponse asciiReply
     * @property {Uint8Array|null} [binaryReplay] NWACommandResponse binaryReplay
     */

    /**
     * Constructs a new NWACommandResponse.
     * @exports NWACommandResponse
     * @classdesc Represents a NWACommandResponse.
     * @implements INWACommandResponse
     * @constructor
     * @param {INWACommandResponse=} [properties] Properties to set
     */
    function NWACommandResponse(properties) {
        this.asciiReply = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * NWACommandResponse uri.
     * @member {string} uri
     * @memberof NWACommandResponse
     * @instance
     */
    NWACommandResponse.prototype.uri = "";

    /**
     * NWACommandResponse asciiReply.
     * @member {Array.<NWACommandResponse.INWAASCIIItem>} asciiReply
     * @memberof NWACommandResponse
     * @instance
     */
    NWACommandResponse.prototype.asciiReply = $util.emptyArray;

    /**
     * NWACommandResponse binaryReplay.
     * @member {Uint8Array|null|undefined} binaryReplay
     * @memberof NWACommandResponse
     * @instance
     */
    NWACommandResponse.prototype.binaryReplay = null;

    // OneOf field names bound to virtual getters and setters
    let $oneOfFields;

    // Virtual OneOf for proto3 optional field
    Object.defineProperty(NWACommandResponse.prototype, "_binaryReplay", {
        get: $util.oneOfGetter($oneOfFields = ["binaryReplay"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new NWACommandResponse instance using the specified properties.
     * @function create
     * @memberof NWACommandResponse
     * @static
     * @param {INWACommandResponse=} [properties] Properties to set
     * @returns {NWACommandResponse} NWACommandResponse instance
     */
    NWACommandResponse.create = function create(properties) {
        return new NWACommandResponse(properties);
    };

    /**
     * Encodes the specified NWACommandResponse message. Does not implicitly {@link NWACommandResponse.verify|verify} messages.
     * @function encode
     * @memberof NWACommandResponse
     * @static
     * @param {INWACommandResponse} message NWACommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NWACommandResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
        if (message.asciiReply != null && message.asciiReply.length)
            for (let i = 0; i < message.asciiReply.length; ++i)
                $root.NWACommandResponse.NWAASCIIItem.encode(message.asciiReply[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.binaryReplay != null && Object.hasOwnProperty.call(message, "binaryReplay"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.binaryReplay);
        return writer;
    };

    /**
     * Encodes the specified NWACommandResponse message, length delimited. Does not implicitly {@link NWACommandResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NWACommandResponse
     * @static
     * @param {INWACommandResponse} message NWACommandResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NWACommandResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NWACommandResponse message from the specified reader or buffer.
     * @function decode
     * @memberof NWACommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NWACommandResponse} NWACommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NWACommandResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NWACommandResponse();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.uri = reader.string();
                    break;
                }
            case 2: {
                    if (!(message.asciiReply && message.asciiReply.length))
                        message.asciiReply = [];
                    message.asciiReply.push($root.NWACommandResponse.NWAASCIIItem.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    message.binaryReplay = reader.bytes();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a NWACommandResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NWACommandResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NWACommandResponse} NWACommandResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NWACommandResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NWACommandResponse message.
     * @function verify
     * @memberof NWACommandResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NWACommandResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        let properties = {};
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.asciiReply != null && message.hasOwnProperty("asciiReply")) {
            if (!Array.isArray(message.asciiReply))
                return "asciiReply: array expected";
            for (let i = 0; i < message.asciiReply.length; ++i) {
                let error = $root.NWACommandResponse.NWAASCIIItem.verify(message.asciiReply[i]);
                if (error)
                    return "asciiReply." + error;
            }
        }
        if (message.binaryReplay != null && message.hasOwnProperty("binaryReplay")) {
            properties._binaryReplay = 1;
            if (!(message.binaryReplay && typeof message.binaryReplay.length === "number" || $util.isString(message.binaryReplay)))
                return "binaryReplay: buffer expected";
        }
        return null;
    };

    /**
     * Creates a NWACommandResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NWACommandResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NWACommandResponse} NWACommandResponse
     */
    NWACommandResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.NWACommandResponse)
            return object;
        let message = new $root.NWACommandResponse();
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.asciiReply) {
            if (!Array.isArray(object.asciiReply))
                throw TypeError(".NWACommandResponse.asciiReply: array expected");
            message.asciiReply = [];
            for (let i = 0; i < object.asciiReply.length; ++i) {
                if (typeof object.asciiReply[i] !== "object")
                    throw TypeError(".NWACommandResponse.asciiReply: object expected");
                message.asciiReply[i] = $root.NWACommandResponse.NWAASCIIItem.fromObject(object.asciiReply[i]);
            }
        }
        if (object.binaryReplay != null)
            if (typeof object.binaryReplay === "string")
                $util.base64.decode(object.binaryReplay, message.binaryReplay = $util.newBuffer($util.base64.length(object.binaryReplay)), 0);
            else if (object.binaryReplay.length >= 0)
                message.binaryReplay = object.binaryReplay;
        return message;
    };

    /**
     * Creates a plain object from a NWACommandResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NWACommandResponse
     * @static
     * @param {NWACommandResponse} message NWACommandResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NWACommandResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.asciiReply = [];
        if (options.defaults)
            object.uri = "";
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.asciiReply && message.asciiReply.length) {
            object.asciiReply = [];
            for (let j = 0; j < message.asciiReply.length; ++j)
                object.asciiReply[j] = $root.NWACommandResponse.NWAASCIIItem.toObject(message.asciiReply[j], options);
        }
        if (message.binaryReplay != null && message.hasOwnProperty("binaryReplay")) {
            object.binaryReplay = options.bytes === String ? $util.base64.encode(message.binaryReplay, 0, message.binaryReplay.length) : options.bytes === Array ? Array.prototype.slice.call(message.binaryReplay) : message.binaryReplay;
            if (options.oneofs)
                object._binaryReplay = "binaryReplay";
        }
        return object;
    };

    /**
     * Converts this NWACommandResponse to JSON.
     * @function toJSON
     * @memberof NWACommandResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NWACommandResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NWACommandResponse
     * @function getTypeUrl
     * @memberof NWACommandResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NWACommandResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NWACommandResponse";
    };

    NWACommandResponse.NWAASCIIItem = (function() {

        /**
         * Properties of a NWAASCIIItem.
         * @memberof NWACommandResponse
         * @interface INWAASCIIItem
         * @property {Object.<string,string>|null} [item] NWAASCIIItem item
         */

        /**
         * Constructs a new NWAASCIIItem.
         * @memberof NWACommandResponse
         * @classdesc Represents a NWAASCIIItem.
         * @implements INWAASCIIItem
         * @constructor
         * @param {NWACommandResponse.INWAASCIIItem=} [properties] Properties to set
         */
        function NWAASCIIItem(properties) {
            this.item = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NWAASCIIItem item.
         * @member {Object.<string,string>} item
         * @memberof NWACommandResponse.NWAASCIIItem
         * @instance
         */
        NWAASCIIItem.prototype.item = $util.emptyObject;

        /**
         * Creates a new NWAASCIIItem instance using the specified properties.
         * @function create
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {NWACommandResponse.INWAASCIIItem=} [properties] Properties to set
         * @returns {NWACommandResponse.NWAASCIIItem} NWAASCIIItem instance
         */
        NWAASCIIItem.create = function create(properties) {
            return new NWAASCIIItem(properties);
        };

        /**
         * Encodes the specified NWAASCIIItem message. Does not implicitly {@link NWACommandResponse.NWAASCIIItem.verify|verify} messages.
         * @function encode
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {NWACommandResponse.INWAASCIIItem} message NWAASCIIItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NWAASCIIItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.item != null && Object.hasOwnProperty.call(message, "item"))
                for (let keys = Object.keys(message.item), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 2 =*/18).string(message.item[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified NWAASCIIItem message, length delimited. Does not implicitly {@link NWACommandResponse.NWAASCIIItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {NWACommandResponse.INWAASCIIItem} message NWAASCIIItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NWAASCIIItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NWAASCIIItem message from the specified reader or buffer.
         * @function decode
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {NWACommandResponse.NWAASCIIItem} NWAASCIIItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NWAASCIIItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NWACommandResponse.NWAASCIIItem(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.item === $util.emptyObject)
                            message.item = {};
                        let end2 = reader.uint32() + reader.pos;
                        key = "";
                        value = "";
                        while (reader.pos < end2) {
                            let tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.string();
                                break;
                            case 2:
                                value = reader.string();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.item[key] = value;
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NWAASCIIItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {NWACommandResponse.NWAASCIIItem} NWAASCIIItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NWAASCIIItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NWAASCIIItem message.
         * @function verify
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NWAASCIIItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.item != null && message.hasOwnProperty("item")) {
                if (!$util.isObject(message.item))
                    return "item: object expected";
                let key = Object.keys(message.item);
                for (let i = 0; i < key.length; ++i)
                    if (!$util.isString(message.item[key[i]]))
                        return "item: string{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a NWAASCIIItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {NWACommandResponse.NWAASCIIItem} NWAASCIIItem
         */
        NWAASCIIItem.fromObject = function fromObject(object) {
            if (object instanceof $root.NWACommandResponse.NWAASCIIItem)
                return object;
            let message = new $root.NWACommandResponse.NWAASCIIItem();
            if (object.item) {
                if (typeof object.item !== "object")
                    throw TypeError(".NWACommandResponse.NWAASCIIItem.item: object expected");
                message.item = {};
                for (let keys = Object.keys(object.item), i = 0; i < keys.length; ++i)
                    message.item[keys[i]] = String(object.item[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a NWAASCIIItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {NWACommandResponse.NWAASCIIItem} message NWAASCIIItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NWAASCIIItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.item = {};
            let keys2;
            if (message.item && (keys2 = Object.keys(message.item)).length) {
                object.item = {};
                for (let j = 0; j < keys2.length; ++j)
                    object.item[keys2[j]] = message.item[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this NWAASCIIItem to JSON.
         * @function toJSON
         * @memberof NWACommandResponse.NWAASCIIItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NWAASCIIItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NWAASCIIItem
         * @function getTypeUrl
         * @memberof NWACommandResponse.NWAASCIIItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NWAASCIIItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/NWACommandResponse.NWAASCIIItem";
        };

        return NWAASCIIItem;
    })();

    return NWACommandResponse;
})();

export { $root as default };
