"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FruitService = (function () {
    function FruitService() {
        this.fruits = [{ name: "Apple", img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIEAdwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcBAgj/xAA6EAABAwIEBAMGBAQHAQAAAAABAAIDBBEFEiExBhNBUSJhgQcycZGhwRRCUrEjJHKyJVNiktHh8BX/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAwQCBQYB/8QAKxEAAgIBAwMDAQkAAAAAAAAAAAECAxEEEjEFEyEiMkFRFBUzYYGRscHw/9oADAMBAAIRAxEAPwDuKIiAIiIAiIgCIiALwm2+ygOLuIW4FSM5YbJVTOsyMnYdXHy+5CotfjdZicThNVSEP0MYdYH0HRV7dRGt4+SGy+MHg6hBX0dTIY6eqgleN2xyBxHyW0uCSxvppRLC8xyNN2mN1iD8QrRw9x7X000cOL/zFOSA6Uiz2DvpuPqooaxN4ksGENSm8SOpovmN7ZGNexwc1wBBB0IX0rpZCIiAIiIAi8utSuxGCiA5jrvPusG5XjaSyz2MXJ4RtlCVW6jFMQnJFO3ljoourqsabmDahl7aAzgFR96JbjopvlpE5jXFOG4LX0lFWOnNRVkCNsULn7m19Ptqtv8AF11S3+UpOS3/ADao5fUMGp+ByrluPDH6qKF1ZMHSU0rZYM8kYLHg7h1/uth9bCHNlxDiN0TrXLRV5zf4NJUUr/PBZj0tvxv/AGyyyY/wTUYlWuxEV7ZqpzQ1zZGZWm2wFth5G/xUYOEMUjjcTSRO7ta9pWlFxRhtHMZW8R1MgbtG1rrO+YUfX+1fERPlooInRdC4EOKicKp+prDILOh2Sl6f7X8mSeiYwuYY+W4GxFspWhLQWOaMknsTt6qwYV7RY65zY8Uoo3ZtCJGg39Vb48OwPHaFzqKKOMn80TQ10Z+Cjel3e1mtv6bdR7iF9n/EGUNwetcQ4aU7nf2H7K/Bc2rOE8Ro6yGWJnPbHK17ZItxYg6j0810hpu0HurWm3qO2fwY1OWMS+D1ERWSYIi8ugIXi3H4uHsJfVvaJJnEMgivbO8/Yblc+oMSraid1XVSGeplIFhoG36BaPtPxQ4hxaKMPtBQsDbX3edXfYeikeE48uaaQe74Rda7Ut2S2rg6nRaSFGj7sl6pf5FronTtg/mHNzEbN3WlVYZRzk85hJd1LjdeyVOZ413K+H1FgS8heKEVyQQhNPK8EbX4DhfJcH07TnO9ze/xVWfgVBC6Q2dY3FifdVjqsQzOLDqwGyqePYo3MIg4C/vOCNpG103d4bILEKaKnnc2N127jT6fustNHBKBZtjbdR9ZMZnF9so7XSlk63ACLzwWLfpInKdzYpMklnM6HqFaMBxabBaiKqgdngJAlZ3HZUmOQONnO0Vg4eeJ3mme67ZG2HkVJB4ZrdVQpRyd2p5o6mnjmicHRyNDmkdQQsjQGtDRsFV/Z9UvkwV1JKbyUkpj9NwrSrqeVk5WyGybj9AiIvTALwr1eHbzQH5uxGpNTxFiFXIcxlqJTv3Jt8tFdcDmy0DA3XsuZuc8VEgN84e6/wAeq36TFamm8UUzm2tpfTzWrk8SO+VXdpjFfB0g1OaTL16rQra57QWjUhpJ1+CqEfEFWyTM54eNvELALKcZbURO5rmtf373Xm4j+zSizcq8ULmODQdBcKryzF85Elr31BStrHyOLGmzXHdaRdmfYkX2v3Tkl3KCPZDf5/RZYXZLjSx+ixODw57ydCbEXX1axDrb2KziV52ZZvx6sNtwVK4C98VYx7QQQ4KMiDeQ51tCeqk8B8WIMBOm6zRDJ+Dq/BEuXG8TgHuvjZKB26fdXZUTgb+LxDiMo2ZCxnrf/pXtXIe05jWfjP8AQIiLMqheFeogPzDxRSOw/iDFKV7bGKqkI/pJuP3C0Glwtfc6hdB9tOCvpcbgxaJv8CsZy5CBtI0fcf2rnTBo0m9vLqtdbHEmdtodRvpizM7S7TluHb33WblkMBy+95rTuRex22utoyvsA4GwbpZV5ItytNWRng8V2kbLE1ty4kaBZ5XAg2NzuFhI8NwLX6X3KkjwUpyyz7ZlIJvdx0F9lmy+AHQH3bAfVYGDM8dT1We5zm3rZZLkhcsmane4uAHcixViwSIRTCRxsGjUlRGF0fMAe8WYDc+f/vspiR5ycuIb6WHVZZ8nuMo6b7MIHHD6zEH3vUznL/S3T91dlF8NYf8A/MwKioyLOZEM/wDUdT9VKK/BYijltRPfbKQREWRCEREBCcYYEziLAanD3HLI4Z4X/peNQft8CV+cKymmoamSlqGFkkbsrm9iF+qVyX2v8MOZ/jdGy8Z8NSB+Xs5V768rKNv0rVdufbk/DOXNjbM6wJv5rPyOWdDdoNtRa6wUxJnBsbHU2UiS7JmaL2Oyp4R0NkXyiIlbeV2UaDovbNIIaLBfdWMsrr9XXsFhJysuN7pgrzyjNTx5hm76BbX4ctIba+br2Xzhw0ut1hMjyRqL2BWS8GNcdzN+ljHK5bTZoCsvAuDjE+IIuY28FIBNJ2v+UfPX0Vfga9rWhrDJJIQ2NjRq5x2AXZeDMBGBYSI5Q01cx5lQ4fq7DyGykphulllbX6lVVuMeWWAbIiK8c0EREAREQBYqmCKpgkgnjbJFI0texwuHA9FlRAcX4y4PbgL+dSRXpXGzHAe7/pKqFg1x731X6NrqOOsgdFJfK4WPmue4x7Km1T3Pw7Evw5Jv44833CqzoefSb/SdVjGG23k5fX00Uz8+rSdiPgo+Sk7O+i6U/wBkWMNjtHxDDIf0yUxt8wVE1Hst4tjfaL8BM39QnLfoQo+zJE33jp5/kViBrYWBrbea2IXZyGxjQa91aKb2V8Qvtz5qWIdbPzH9ldOF+BYMHLX1FM2eYG+aSQEA+QsFmqWyOXUq4+0wezrhV8L241icZ5xbamY78gP5rdCV0Gy+Wg21AHwX2rMYqKwjR3XSunukERFkRBERAEREARaVbJWNmYyljaWuGryL5TceY0tdaklVijgAylbGQ0E5m5rkgmw8Q6gfNATCKJFTiZie80sYI1DdTfUab9r/ACGyNqcSDi11M0j9Ybtr2za6dPLzsgJZFGx1FcYmcymtJzLO6gN11330Hwv1tr8MqcTOUmkY0aZgdzvfrpsB638kBKotSd9SG1IZG0Bsd4XtddznWOmUiw6dTfyWjNNioN4YSQXMIBAFhlNx87a369N0BMooPnYznDTEMvju6w18Onw8W3l3WQS4plbmhdmAjLmgNFyc2YA/7endATCLXo+dlk57if4jsgIFw3YbfP1WwgCIiAIiIDzqnREQDondEQDp6IiIB/wiIgCdURABuvURAEREB//Z" },
            { name: "Coconut", img: "data:image/jpeg;base64,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" }];
    }
    FruitService.prototype.getAll = function () {
        return this.fruits;
    };
    return FruitService;
}());
exports.FruitService = FruitService;
