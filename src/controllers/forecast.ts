import { Controller, Get } from "@overnightjs/core";
import { Request, Response } from "express";
@Controller('forecast')
export class ForecastController {

    @Get('')
    public getForecastForLoggedUser(_: Request, res: Response): void {
        res.send([
            {
                'name': 'yes',
                'yes': '1'
            },
            {
                'name': 'yes2'
            }
        ])
    }
}