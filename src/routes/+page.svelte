<script>
    import { goto, invalidate, invalidateAll } from '$app/navigation';
    import { browser } from '$app/environment'

    /** @type {import('./$types').PageData} */
    export let data;

    console.log(data.inverter)

    if (browser) {
        setInterval(() => {
            invalidate('app:random');
        }, 2000)
    }
    
</script>

<div class="grid grid-cols-2 gap-4 pt-4 mx-4 mb-4">
    <div class="row-span-4 flex flex-col justify-center items-center border rounded-lg bg-gray-100 p-4">
        <small class="block text-xs pb-2 text-gray-900">Current Load</small>
        <strong class=" text-4xl">{data.inverter.power + data.grid.power * -1}</strong>
        <small class="block text-gray-500">Watts</small>
    </div>
    <div class="row-span-2 rounded-lg bg-green-200 p-4">
        <small class="block text-xs pb-2 text-gray-900">Inverter Output</small>
        <strong class=" text-xl">{data.inverter.power < 0 ? 0 : data.inverter.power}</strong>
        <small class="block text-gray-500">Watts </small>
    </div>
    <div class="row-span-2 rounded-lg bg-gray-200 p-4">
        <small class="block text-xs pb-2 text-gray-900">Current Grid Import</small>
        <strong class=" text-xl">{data.grid.power < 0 ? data.grid.power * -1 : 0}</strong>
        <small class="block text-gray-500">Watts </small>
    </div>
</div>
<div class="flex flex-col border rounded-lg bg-white p-4 m-4">
    <div class="flex border-b pb-4 mb-4">
        <div class="flex-1">Grid</div>
        <div class="flex-1 text-right">{data.grid.power * -1} <small class="text-sm text-gray-500">Watts</small></div>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div>
            <div class="text-xs text-gray-500 pb-1">Voltage</div>
            <div class="flex rounded-md border overflow-hidden">
                <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.grid.voltage}</div>
                <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Volts</small>
            </div>
        </div>
        <div>
            <div class="text-xs text-gray-500 pb-1">Frequency</div>
            <div class="flex rounded-md border overflow-hidden">
                <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.grid.frequency}</div>
                <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Hz</small>
            </div>
        </div>
        <div>
            <div class="text-xs text-gray-500">Current Output</div>
            <div>{data.inverter.power} <small class="text-sm text-gray-500">Watts</small></div>
        </div>
        <div>
            <div class="text-xs text-gray-500">Temperature</div>
            <div>{data.inverter.temperatures[0]}&deg;C</div>
        </div>
    </div>
</div>
<div class="flex flex-col border rounded-lg bg-white p-4 m-4">
    <div class="flex border-b pb-4 mb-4">
        <div class="flex-1 flex items-center text-sm">Inverter</div>
        <div class="flex-1 flex items-center justify-end">
            {#if data.inverter.mode == 2}
                <div class="bg-green-600 text-white rounded-md px-2 py-1 text-xs">Normal</div>
            {:else}
                <div class="bg-red-600 text-white rounded-md px-2 py-1 text-xs">Fault</div>
            {/if}
        </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <!-- <div class="flex-none w-32 flex items-center px-6">
            <img src="/images/{data.inverter.model.toLowerCase().replaceAll(' ', '-')}.webp" class="" alt="" />
        </div> -->
            <div>
                <div class="text-xs text-gray-500">Model</div>
                <div>{data.inverter.model}</div>
            </div>
            <div>
                <div class="text-xs text-gray-500">Serial Number</div>
                <div>{data.inverter.sn}</div>
            </div>
            <div>
                <div class="text-xs text-gray-500">Current Output</div>
                <div>{data.inverter.power} <small class="text-sm text-gray-500">Watts</small></div>
            </div>
            <div>
                <div class="text-xs text-gray-500">Temperature</div>
                <div>{data.inverter.temperatures[0]}<span class=" text-gray-500">&deg;C</span></div>
            </div>
    </div>
</div>
<div class="flex flex-col border rounded-lg bg-white m-4 p-4">
    <div class="flex pb-4 text-sm">
        <div class="flex-1">Solar Panels</div>
        <div class="flex-1 text-right">{data.panels.power} <small class="text-sm text-gray-500">Watts</small></div>
    </div>
    <div class="grid grid-cols-2 gap-4">
        <div class="flex flex-col bg-gray-100 rounded-lg">
            <div class="flex border-b border-gray-300 px-4 p-3 mb-4 text-sm">String 1</div>
            <div class="flex flex-col gap-4 px-4 pb-4">
                <div>
                    <div class="text-xs text-gray-500 pb-1">Power</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv1.power}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Watts</small>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500 pb-1">Voltage</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv1.voltage}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Volts</small>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500 pb-1">Current</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv1.current}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Amps</small>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col bg-gray-100 rounded-lg">
            <div class="flex border-b border-gray-300 px-4 p-3 mb-4 text-sm">String 2</div>
            <div class="flex flex-col gap-4 px-4 pb-4">
                <div>
                    <div class="text-xs text-gray-500 pb-1">Power</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv2.power}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Watts</small>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500 pb-1">Voltage</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv2.voltage}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Volts</small>
                    </div>
                </div>
                <div>
                    <div class="text-xs text-gray-500 pb-1">Current</div>
                    <div class="flex rounded-md border overflow-hidden">
                        <div class="flex-2 w-full px-2 py-1 border-r bg-white text-right">{data.panels.pv2.current}</div>
                        <small class="flex-none flex px-2 py-1 items-center justify-center text-xs bg-gray-50 text-gray-500 w-14">Amps</small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="grid grid-cols-2 gap-4 p-4">
    <div class="row-span-4 flex  flex-col justify-center items-center border rounded-lg bg-gray-100 p-4">
        <small class="block text-xs pb-2 text-gray-900">Current Load</small>
        <strong class=" text-4xl">{data.inverter.power + data.grid.power * -1}</strong>
        <small class="block text-gray-500">Watts</small>
    </div>
    <div class="row-span-2 rounded-lg bg-green-200 p-4">
        <small class="block text-xs pb-2 text-gray-900">Inverter Output</small>
        <strong class=" text-xl">{data.inverter.power < 0 ? 0 : data.inverter.power}</strong>
        <small class="block text-gray-500">Watts </small>
    </div>
    <div class="row-span-2 rounded-lg bg-gray-200 p-4">
        <small class="block text-xs pb-2 text-gray-900">Current Grid Import</small>
        <strong class=" text-xl">{data.grid.power < 0 ? data.grid.power * -1 : 0}</strong>
        <small class="block text-gray-500">Watts </small>
    </div>
</div>

<pre class="text-white">
{ JSON.stringify(data, null, 4) }
</pre>

