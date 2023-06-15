class LovenseCommand {

    constructor(init?: Partial<LovenseCommand>) {
        Object.assign(this, init);
    }

    /**
     * Type of request
     */
    command: string;

    /**
     * Control the function and strength of the toy
     * Actions can be Vibrate, Rotate, Pump or Stop. Use Stop to stop the toy’s response.
     * Range:
     * - Vibrate: 0 ~ 20
     * - Rotate: 0 ~ 20
     * - Pump: 0 ~ 3
     *
     * @example "Vibrate:2;Rotate:4;Pump:7"
     */
    action?: string;

    /**
     * Apply a specific parameters to Pattern
     * - V:1; Protocol version, this is static;
     * - F:vrp; Features: v is vibrate, r is rotate, p is pump, this should match the strength below;
     * - S:1000; Intervals in Milliseconds, should be greater than 100.
     * @example "V:1;F:vrp;S:1000#"
     */
    rule?: string;

    /**
     * The pattern to be applied to the toy
     * @example "20;20;5;20;10"
     */
    strength?: string;

    /**
     * Additionally information to provide with the command.
     */
    name?: string;

    /**
     * Total running time
     * 0 = indefinite length
     * Otherwise, running time should be greater than 1.
     */
    timeSec?: number;

    /**
     * Running time
     * Should be greater than 1.
     */
    loopRunningSec?: number;

    /**
     * Suspend time
     * Should be greater than 1.
     */
    loopPauseSec?: number;

    /**
     * Toy ID
     * If you don't include this, it will be applied to all toys.
     */
    toy?: string;

    /**
     * Stop all previous commands and execute current command.
     */
    stopPrevious?: number;

    /**
     * The version of the request
     */
    apiVer?: number;
}