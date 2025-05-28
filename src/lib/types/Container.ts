    export type ContainerHistory = {
        timestamp: string;
        levelPercent: number;
    }
    export type Container = {
        id: string
        history: ContainerHistory[]
    }